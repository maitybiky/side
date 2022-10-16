import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk("products", async (word) => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  console.log(word);
  if(!word){
    return data;
  }else{
   return data.filter(item=>JSON.stringify(item).toLowerCase().includes(word.toLowerCase()))
  }
  // return data
})
const productSlice = createSlice({
  name: "products",
  initialState: {
    data : [],
    status : ""
  },
  reducers:(builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        const raw_array = action.payload
        const qty = raw_array.map((item)=>{
          return {...item,quantity:1}
        })
        state.data = qty;

        console.log('quantity array',qty);
        if(state.data.length!=0){
          if(!action.meta.arg){
            state.status=""
          }
          else{
            state.status= `${state.data.length}`+ " Items found for "+`"${action.meta.arg}"`
          }
        }else{
          state.status = 'Not Found !';
        }
      })
      .addCase(fetchProducts.pending, (state, action) => {
        // state.data = action.payload;
        state.status = "Loading..."
    })
    .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "Cheak Your Internet Connection !";
    });
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        const raw_array = action.payload
        const qty = raw_array.map((item)=>{
          return {...item,quantity:1}
        })
        state.data = qty;

        console.log('quantity array',qty);
        if(state.data.length!=0){
          if(!action.meta.arg){
            state.status=""
          }
          else{
            state.status= `${state.data.length}`+ " Items found for "+`"${action.meta.arg}"`
          }
        }else{
          state.status = 'Not Found !';
        }
      })
      .addCase(fetchProducts.pending, (state, action) => {
        // state.data = action.payload;
        state.status = "Loading..."
    })
    .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "Cheak Your Internet Connection !";
    });
  },
});

export default productSlice.reducer;

