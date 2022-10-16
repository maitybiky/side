import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./Slice/Cartslice";
import prodreducer from "./Slice/Productslice";
import Authslice from "./Slice/Authslice";
import Search from "./Slice/Search";
export const Store = configureStore({
  reducer: {
    product: prodreducer,
    cart: cartreducer,
    auth : Authslice,
    search : Search
  },
});
