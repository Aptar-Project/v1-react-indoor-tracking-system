import Container from "@mui/material/Container";
import { DataGrid } from "@mui/x-data-grid";

export const UserTable = () => {
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
        rows={[]}
        columns={contentColumn.concat(viewColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </Container>
  );
};
