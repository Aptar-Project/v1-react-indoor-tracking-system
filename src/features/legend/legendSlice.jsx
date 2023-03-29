import userIcon from "../../assets/icons/user.png";
import sensorIcon from "../../assets/icons/sensor.png";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rows: [
    {
      name: "Sensor",
      icon: sensorIcon,
    },
    {
      name: "User",
      icon: userIcon,
    },
  ],
};

const legendSlice = createSlice({
  name: "legend",
  initialState,
  reducers: {},
});

export default legendSlice.reducer;
