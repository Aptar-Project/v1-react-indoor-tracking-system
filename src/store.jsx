import { configureStore } from "@reduxjs/toolkit";

import legendReducer from "./features/legend/legendSlice";
import mapReducer from "./features/mapWindow/mapSlice";
import userReducer from "./features/user/userSlice";
import sensorReducer from "./features/sensor/sensorSlice";
import accountReducer from "./features/account/accountSlice";

export const store = configureStore({
  reducer: {
    legend: legendReducer,
    map: mapReducer,
    user: userReducer,
    sensor: sensorReducer,
    account: accountReducer,
  },
});
