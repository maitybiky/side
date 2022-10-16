import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    wordi:""
  },
  reducers: {
    searchi(state, action) {
        console.log(action.payload,'hs');
      state.wordi = action.payload;
    },
  },
});

export default searchSlice.reducer;
export const { searchi } = searchSlice.actions;
