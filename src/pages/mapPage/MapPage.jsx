import "leaflet/dist/leaflet.css";
import { AllElTable } from "../../components/AllElTable/AllElTable";
import { LegendTable } from "../../components/legendTable/LegendTable";
import { MapWindow } from "../../components/mapWindow/MapWindow";
import "./mapPage.css";

export const MapPage = () => {
  return (
    <>
      <div className="content">
        <div>
          <MapWindow />
          <LegendTable />
        </div>
        <AllElTable />
      </div>
      <div></div>
    </>
  );
};
