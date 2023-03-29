import { createSlice } from "@reduxjs/toolkit";
import sensors from "../../assets/mock/sensors";
import sensorIcon from "../../assets/icons/sensor.png";

const initialState = {
  sensors: sensors,
  sensorIcon: L.icon({
    iconUrl: sensorIcon,
    iconSize: [50, 50],
    iconAnchor: [20, 45],
    popupAnchor: [0, 0],
  }),
};

export const sensorSlice = createSlice({
  name: "sensor",
  initialState,
  reducers: {},
});

export default sensorSlice.reducer;
