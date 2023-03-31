import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Container from "@mui/material/Container";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSensorList } from "../../features/sensor/sensorSlice";

export const SensorTable = () => {
  const { status, sensors } = useSelector((store) => store.sensor);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchSensorList());
    }
  }, [status, dispatch]);

  const contentColumn = [
    {
      field: "identificationCode",
      headerName: "Identification Code",
      width: 250,
    },
    {
      field: "latitudine",
      headerName: "Latitudine",
      width: 250,
    },
    {
      field: "longitudine",
      headerName: "Longitudine",
      width: 250,
    },
  ];

  const viewColumn = [
    {
      field: "actions",
      headerName: "Actions",
      with: 100,
      renderCell: (params) => {
        return (
          <div className="cellAction" style={{ display: "flex" }}>
            <IconButton variant="outlined" size="small" className="viewButton">
              <EditIcon className="icon" />
            </IconButton>
          </div>
        );
      },
    },
  ];

  return (
    <Container>
      <h1>Sensors</h1>
      <DataGrid
        sx={{ height: 800 }}
        getRowId={(row) => row.identificationCode}
        rows={[...sensors]}
        columns={contentColumn.concat(viewColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
      {/* {sensors} */}
    </Container>
  );
};
