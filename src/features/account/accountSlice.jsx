import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
import javaAxios from "../../api/javaAxios";

const LOGIN_API = "/auth/signin";

const initialState = {
  email: "",
  pwd: "",
  isLoggedIn: false,
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
    setEmail(state, inputEmail) {
      state.email = inputEmail.payload;
    },
    setPwd(state, inputPwd) {
      state.pwd = inputPwd.payload;
    },

    accountLogin(state) {
      try {
        javaAxios
          .post(
            LOGIN_API,
            JSON.stringify({ email: state.email, password: state.pwd }),
            { headers: { "Content-Type": "application/json" } }
          )
          .then((res) => {
            localStorage.setItem("token", res.data.token);
          });
        state.isLoggedIn = true;
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export const accountActions = accountSlice.actions;

export default accountSlice.reducer;
