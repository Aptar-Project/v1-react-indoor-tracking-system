import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  emailInput: "",
  pwdInput: "",
  token: "",
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setEmail: (state) => {
      console.log("ciao");
    },
  },
});

export default accountSlice.reducer;
