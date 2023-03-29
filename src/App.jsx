import "./App.css";
import { BasePage } from "./pages/basePage/BasePage";
import { MapPage } from "./pages/mapPage/MapPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserPage } from "./pages/usersPage/userPage";
import { SensorPage } from "./pages/sensorPage/SensorPage";
import { PositionPage } from "./pages/positionPage/PositionPage";
import { LoginPage } from "./pages/loginPage/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          element={
            <div className="App">
              <BasePage />
            </div>
          }
        >
          <Route path="/" element={<MapPage />} />
          <Route path="/users" element={<UserPage />} />
          <Route path="/sensors" element={<SensorPage />} />
          <Route path="/positions" element={<PositionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
