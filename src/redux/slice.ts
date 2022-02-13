import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  data: null,
  func: null,
  result: null,
};

export const slice = createSlice({
  name: "root",
  initialState,
  reducers: {
    setData: (state, action) => {
      console.log(action.payload);
      state.data = action.payload.data;
    },
    setFunc: (state, action) => {
      state.func = action.payload.func;
    },
    setResult: (state, action) => {
      state.result = action.payload.result;
    },
  },
});

const { reducer, actions } = slice;
export const { setData, setFunc, setResult } = actions;

export default reducer;
