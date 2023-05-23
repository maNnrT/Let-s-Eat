import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as request from '@/utils/request';
import config from '@/config';
import { Combo } from '@/types/types';
import { PriceOrder, PriceSlider } from '@/enum/enum';

interface initialState {
  combos: Combo[];
  status: string;
  comboById: Combo;
  combosByName: Combo[];
}
const combosSlice = createSlice({
  name: 'combos',
  initialState: {
    combos: [],
    status: 'idle',
    comboById: {
      id: undefined,
      name: '',
      img: '',
      numberPeople: 0,
      dishes: [],
    },
    combosByName: [],
    priceFilter: [PriceSlider.MIN, PriceSlider.MAX],
    productFilter: false,
    priceOrder: PriceOrder.DEFAULT,
    searchFilter: '',
  } as initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCombos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCombos.fulfilled, (state, action) => {
        if (action.payload) state.combos = action.payload;
        state.status = 'idle';
      })
      .addCase(getCombos.rejected, (state) => {
        state.status = 'idle';
      })
      .addCase(getComboById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getComboById.fulfilled, (state, action) => {
        if (action.payload) state.comboById = action.payload;
        state.status = 'idle';
      })
      .addCase(getComboById.rejected, (state) => {
        state.status = 'idle';
      })
      .addCase(getCombosByName.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCombosByName.fulfilled, (state, action) => {
        if (action.payload) state.combosByName = action.payload;
        state.status = 'idle';
      })
      .addCase(getCombosByName.rejected, (state) => {
        state.status = 'idle';
      });
  },
});
export const getCombos = createAsyncThunk('combos/getCombos', async () => {
  try {
    const res = await request.get(config.api.combos);
    return res as Combo[];
  } catch (error) {
    console.error('Cant get combos');
  }
});
export const getComboById = createAsyncThunk('combos/getComboByID', async (id: number) => {
  try {
    const res = await request.get(`${config.api.combos}/${id}`);
    return res as Combo;
  } catch (error) {
    console.error('Cant get combo by id');
  }
});
export const getCombosByName = createAsyncThunk('combos/getCombosByName', async (name: string) => {
  try {
    const res = await request.get(config.api.combos);
    const result = res.filter((combo: Combo) => {
      return combo.name.includes(name);
    });
    return result as Combo[];
  } catch (error) {
    console.error('Cant get combos by name');
  }
});
export default combosSlice;
