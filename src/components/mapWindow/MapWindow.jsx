import { useSelector } from "react-redux";
import { MapContainer, ImageOverlay, Marker, Polyline } from "react-leaflet";
import "./mapWindow.css";
import { Container } from "@mui/system";
import { useEffect } from "react";
import javaAxios from "../../api/javaAxios";

export const MapWindow = () => {
  const { center, zoom, image, crs, imageBounds, marker } = useSelector(
    (store) => store.map
  );

  const GET_TAG_BY_ID = "/tag/64231903afb16e2315d04ee1";

  const { users, userIcon, positions } = useSelector((store) => store.user);
  const { sensors, sensorIcon } = useSelector((store) => store.sensor);

  useEffect(() => {
    javaAxios
      .get(GET_TAG_BY_ID, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtb2RlcmF0b3JFbWFpbEBnbWFpbC5jb20iLCJpYXQiOjE2ODAwMzYwNzYsImV4cCI6MTY4MDEyMjQ3Nn0.M5S0O9U_TvJLUkIBWESnKPtLo49Zotk7ehfRyBiJfG5J66SLLkhBbJLWIk7AEPe9tcgQ0NBhZ7jsfquUgoVN1w`,
        },
      })
      .then((result) => {
        console.log(result);
      });
  }, []);

  return (
    <>
      <Container style={{ width: 700, height: 570, marginBottom: 100 }}>
        <h1>Mappa</h1>
        <MapContainer
          className="map-container"
          center={center}
          zoom={zoom}
          crs={crs}
          minZoom={0}
          maxZoom={0}
          zoomSnap={0.25}
          dragging={false}
          doubleClickZoom={() => disable}
        >
          <ImageOverlay url={image} bounds={imageBounds} />
          {/* {users.map((user) => (
            <Marker
              key={user.id}
              icon={userIcon}
              position={{
                lat: positions[0].latitudine,
                lng: positions[0].longitudine,
              }}
            />
          ))} */}
          {/* {sensors.map((sensor) => (
            <Marker
              key={sensor.id}
              icon={sensorIcon}
              position={{
                lat: 0,
                lng: 0,
              }}
            />
          ))} */}
          <Polyline pathOptions={{ color: "red" }} positions={[]} />
        </MapContainer>
      </Container>
    </>
  );
};
