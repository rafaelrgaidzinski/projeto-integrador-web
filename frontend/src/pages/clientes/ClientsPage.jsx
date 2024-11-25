import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";


const Clients = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        {
          field: "nome",
          headerName: "Nome",
          flex: 1,
          cellClassName: "name-column--cell",
        },
        {
          field: "cpf",
          headerName: "CPF",
          type: "number",
          headerAlign: "left",
          align: "left",
        },
        {
          field: "telefone",
          headerName: "Telefone",
          flex: 1,
        },
        {
          field: "email",
          headerName: "E-mail",
          flex: 1,
        },
        {
          field: "endereco",
          headerName: "Endereço",
          flex: 1,
        }
      ];

    return (
        <Box m={"20px"}>
            <Header title={"Clientes"}/>
            <Box m={"40px 0 0 0"} height={"75vh"} sx={{
                "& .MuiDataGrid-root": {border: "none"},
                "& .MuiDataGrid-cell": {borderBottom: "none", fontSize: "14px"},
                "& .name-column--cell": {color: colors.greenAccent[500]},
                "& .MuiDataGrid-columnHeaders": {backgroundColor: colors.blueAccent[700], borderBottom: "none"},
                "& .MuiDataGrid-virtualScroller": {backgroundColor: colors.primary[400]},
                "& .MuiDataGrid-footerContainer": {borderTop: "none", backgroundColor: colors.blueAccent[700]},
                "& .MuiCheckbox-root": {color: `${colors.greenAccent[200]} !important`},
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {color: `${colors.grey[100]} !important`}
            }}>
                <DataGrid checkboxSelection rows={mockDataContacts} columns={columns} slots={{ toolbar: GridToolbar }} slotProps={{ toolbar: {showQuickFilter: true }}}/>
            </Box>
        </Box>
    )
}

export default Clients;