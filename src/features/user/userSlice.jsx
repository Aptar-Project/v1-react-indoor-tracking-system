import { createSlice } from "@reduxjs/toolkit";
import users from "../../assets/mock/users";
import positions from "../../assets/mock/posizioni";
import userIcon from "../../assets/icons/user.png";

const initialState = {
  users: users,
  userIcon: L.icon({
    iconUrl: userIcon,
    iconSize: [50, 50],
    iconAnchor: [20, 45],
    popupAnchor: [0, 0],
  }),
  positions: positions,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
