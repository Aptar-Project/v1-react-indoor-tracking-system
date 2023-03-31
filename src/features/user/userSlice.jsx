import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import positions from "../../assets/mock/posizioni";
import userIcon from "../../assets/icons/user.png";
import javaAxios from "../../api/javaAxios";

import L from "leaflet";

const GET_USERS = "/tag";

const initialState = {
  users: [],
  userStatus: "idle",
  error: null,
  userIcon: L.icon({
    iconUrl: userIcon,
    iconSize: [50, 50],
    iconAnchor: [10, 45],
    popupAnchor: [0, 0],
  }),
  positions: positions,
};

export const fetchUserList = createAsyncThunk(
  "user/fetchUserList",
  async () => {
    let token = localStorage.getItem("token");
    const response = await javaAxios
      .get(GET_USERS, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        console.log(err);
      });

    return response.data.content;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUserList.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUserList.fulfilled, (state, action) => {
        state.status = "succeded";
        state.users = action.payload;
        //adding things to do
      })
      .addCase(fetchUserList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
