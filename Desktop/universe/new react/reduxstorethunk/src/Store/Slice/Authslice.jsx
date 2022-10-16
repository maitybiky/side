import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as Api from "../../Api/Api";
export const signIn = createAsyncThunk(
  "sign_in",
  async ({ formData, Navigate }) => {
    
      const response = await Api.sign_in(formData);
      Navigate('/')
      console.log("Response/logIn", response);
      return response.data
    
  }
);

export const signUp = createAsyncThunk("sign_up", async (formData) => {
  // console.log("In Auth Slice",formData);
  const response = await Api.sign_up(formData);
  alert("Registration Successfull");
  console.log("Response/register", response);
});

const authSlice = createSlice({
  name: "authentication/reducer",
  initialState: {
    state: null,
    loading: "",
   error : ""
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signIn.pending,(state,action)=>{
        state.loading = "Please Wait..."
        state.error=""
    })
    .addCase(signIn.fulfilled,(state,action)=>{
        state.loading = "";
        state.state = action.payload;
    })
    .addCase(signIn.rejected,(state,action)=>{
        state.error="Password Not Match"
        state.loading = "";
    })
  },
});

export default authSlice.reducer