import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import sensorIcon from "../../assets/icons/sensor.png";
import javaAxios from "../../api/javaAxios";
import L from "leaflet";

const GET_SENSORS = "/sensore";

const initialState = {
  sensors: [],
  status: "idle",
  error: null,
  sensorIcon: L.icon({
    iconUrl: sensorIcon,
    iconSize: [50, 50],
    iconAnchor: [20, 45],
    popupAnchor: [0, 0],
  }),
};

export const fetchSensorList = createAsyncThunk(
  "sensor/fetchSensorList",
  async () => {
    let token = localStorage.getItem("token");
    const response = await javaAxios
      .get(GET_SENSORS, {
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

export const sensorSlice = createSlice({
  name: "sensor",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSensorList.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchSensorList.fulfilled, (state, action) => {
        state.status = "succeded";
        state.sensors = action.payload;
      })
      .addCase(fetchSensorList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const getAllSensor = (state) => state.sensors;
export const getSensorStatus = (state) => state.status;
export const getSensorError = (state) => state.error;

export default sensorSlice.reducer;
