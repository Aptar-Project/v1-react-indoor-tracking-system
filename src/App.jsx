import "./App.css";
import { BasePage } from "./pages/basePage/BasePage";
import { MapPage } from "./pages/mapPage/MapPage";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { UserPage } from "./pages/usersPage/userPage";
import { SensorPage } from "./pages/sensorPage/SensorPage";
import { PositionPage } from "./pages/positionPage/PositionPage";
import { LoginPage } from "./pages/loginPage/LoginPage";
import { useSelector } from "react-redux";

function App() {
  const { isLoggedIn } = useSelector((state) => state.account);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <div className="App">
              {!isLoggedIn && <BasePage />}
              {isLoggedIn && <BasePage />}
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
