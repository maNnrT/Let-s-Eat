import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-types
const debounceFunction = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  console.log('debounce', ms);
  
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};
export default debounceFunction;
