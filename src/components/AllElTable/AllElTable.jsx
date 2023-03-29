import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";

export const AllElTable = () => {
  const { users } = useSelector((store) => store.user);
  const { sensors } = useSelector((store) => store.sensor);

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
        columns={contentColumn.concat(viewColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
      <h1>Sensors</h1>
      <DataGrid
        sx={{ height: 320 }}
        rows={sensors}
        columns={contentColumn.concat(viewColumn)}
        pageSize={4}
        rowsPerPageOptions={[4]}
      />
    </div>
  );
};
