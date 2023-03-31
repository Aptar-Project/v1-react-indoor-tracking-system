import { IconButton } from "@mui/material";
import Container from "@mui/material/Container";
import EditIcon from "@mui/icons-material/Edit";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserList } from "../../features/user/userSlice";

export const UserTable = () => {
  const { userStatus, users } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userStatus === "idle") {
      dispatch(fetchUserList());
    }
  }, [userStatus, dispatch]);

  const contentColumn = [
    {
      field: "identificationCode",
      headerName: "Identification Code",
      width: 250,
    },
    {
      field: "ultimoAggiornamento",
      headerName: "Ultimo aggiornamento",
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
      <h1>Users</h1>
      <DataGrid
        sx={{ height: 810 }}
        rows={[...users]}
        getRowId={(row) => row.identificationCode}
        columns={contentColumn.concat(viewColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </Container>
  );
};
