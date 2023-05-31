import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as request from '@/utils/request';
import config from '@/config';
import { Combo, Product } from '@/types/types';
interface initialState {
  products: Product[];
  productsByIdArray: Product[];
  combos: Combo[];
  status: string;
  productById: Product;
  productsByName: Product[];
  dishFilter: string;
}
const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    productsByIdArray: [],
    status: 'idle',
    productById: {
      id: undefined,
      type: '',
      img: '',
      dish: '',
      name: '',
      description: '',
      ingredient: '',
      detail: '',
      detailImg: '',
      price: '',
      dishLeft: 0,
    },
    productsByName: [],
    combos: [],
    dishFilter: 'fresh-baked',
  } as initialState,
  reducers: {
    dishFilterProductChange: (state, action) => {
      state.dishFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        if (action.payload) state.products = action.payload;
        state.status = 'idle';
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = 'idle';
      })

      .addCase(getProductById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        if (action.payload) state.productById = action.payload;
        state.status = 'idle';
      })
      .addCase(getProductById.rejected, (state) => {
        state.status = 'idle';
      })

      .addCase(getProductsByIdArray.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProductsByIdArray.fulfilled, (state, action) => {
        if (action.payload) state.productsByIdArray = action.payload;
        state.status = 'idle';
      })
      .addCase(getProductsByIdArray.rejected, (state) => {
        state.status = 'idle';
      })

      .addCase(getProductsByName.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProductsByName.fulfilled, (state, action) => {
        if (action.payload) state.productsByName = action.payload;
        state.status = 'idle';
      })
      .addCase(getProductsByName.rejected, (state) => {
        state.status = 'idle';
      });
  },
});
export const getProducts = createAsyncThunk('products/getProducts', async () => {
  try {
    const res = await request.get(config.api.products);
    return res as Product[];
  } catch (error) {
    console.error('Cant get products');
  }
});
export const getProductById = createAsyncThunk('products/getProductByID', async (id: number) => {
  try {
    const res = await request.get(`${config.api.products}/${id}`);
    return res as Product;
  } catch (error) {
    console.error('Cant get product by id');
  }
});
export const getProductsByIdArray = createAsyncThunk('products/getProductsByIdArray', async (data: number[]) => {
  const arrayOfProduct: Product[] = [];
  const getProduct = (id: number) => {
    request
      .get(`${config.api.products}/${id}`)
      .then((res) => {
        arrayOfProduct.push(res);
      })
      .catch(() => console.error(`Cant get ${id} product`));
  };

  try {
    data.forEach((id) => {
      getProduct(id);
    });
    console.log(arrayOfProduct);
    return arrayOfProduct as Product[];
  } catch (error) {
    console.error('Cant get products by id');
  }
});
export const getProductsByName = createAsyncThunk('products/getProductsByName', async (name: string) => {
  try {
    const res = await request.get(config.api.products);
    const result = res.filter((product: Product) => {
      return product.name.includes(name);
    });
    return result as Product[];
  } catch (error) {
    console.error('Cant get products by name');
  }
});
export const { dishFilterProductChange } = productsSlice.actions;
export default productsSlice;
