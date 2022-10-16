import { ListItemButton } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    addTocart(state, action) {
      state.push(action.payload);
    },
    removeFromcart(state, action) {
      return state.filter((cart) => cart.id !== action.payload);
    },
    increaseQty(state, action) {
      const index = state.findIndex((c) => c.id === action.payload);
      state[index].quantity += 1;
    },
    decreaseQty(state, action) {
      const index = state.findIndex((c) => c.id === action.payload);

      state[index].quantity -= 1;
    },
  },
});
// const arr = [{ id: 1,name:'a' }, { id: 2,name:"b" }, { id: 3 ,name:"c"}];
// const newarr = arr.map(item=>{
//   if(item.id===3){
//     return item
//   }
// })

// const newArr = arr.filter(item=>item.id===3)

export default cartSlice.reducer;
export const { addTocart, removeFromcart, increaseQty, decreaseQty } =
  cartSlice.actions;
