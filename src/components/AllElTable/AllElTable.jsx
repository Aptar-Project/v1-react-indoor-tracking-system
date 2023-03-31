import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSensorList } from "../../features/sensor/sensorSlice";
import { fetchUserList } from "../../features/user/userSlice";

export const AllElTable = () => {
  const { users, userStatus } = useSelector((store) => store.user);
  const { status, sensors } = useSelector((store) => store.sensor);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchSensorList());
    }
    if (userStatus === "idle") {
      dispatch(fetchUserList());
    }
  }, [status, dispatch]);

  const contentColumn = [
    {
      field: "icon",
      headerName: "Icon",
      width: 80,
    },
    {
      field: "identificationCode",
      headerName: "Identification Code",
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
    <div style={{ marginLeft: 100 }}>
      <h1>Users</h1>
      <DataGrid
        sx={{ height: 400 }}
        rows={users}
        getRowId={(row) => row.identificationCode}
        columns={contentColumn.concat(viewColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
      <h1>Sensors</h1>
      <DataGrid
        sx={{ height: 320 }}
        getRowId={(row) => row.identificationCode}
        rows={[...sensors]}
        columns={contentColumn.concat(viewColumn)}
        pageSize={4}
        rowsPerPageOptions={[4]}
      />
    </div>
  );
};
