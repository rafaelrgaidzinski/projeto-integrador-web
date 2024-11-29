import { Box, useTheme, Button } from "@mui/material";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataSuppliers } from "../../data/mockData";
import { Link } from "react-router-dom";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import Header from "../../components/Header";


const Supplier = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        {
          field: "supplier",
          headerName: "Fornecedor",
          flex: 1,
          cellClassName: "supplier-column--cell",
        },
        {
          field: "cnpj",
          headerName: "CNPJ",
          type: "number",
          headerAlign: "left",
          align: "left",
        },
        {
         field: "inCharge",
         headerName: "Responsável",
         flex: 1,
        },
        {
          field: "phone",
          headerName: "Telefone",
          flex: 1,
        },
        {
          field: "email",
          headerName: "E-mail",
          flex: 1,
        },
        {
          field: "payment",
          headerName: "Formas de Pagamento",
          flex: 1,
        },
        {
          field: "delivery",
          headerName: "Prazo de Entrega",
          flex: 1,
        },
        {
          field: 'actions',
          type: 'actions',
          headerName: 'Ações',
          width: 100,
          cellClassName: 'actions',
          getActions: ({ id }) => {

            return [
              <GridActionsCellItem
                icon={<EditIcon />}
                label="Edit"
                className="textPrimary"
                onClick={handleEditClick(id)}
                color="inherit"
              />,
              <GridActionsCellItem
                icon={<DeleteIcon />}
                label="Delete"
                onClick={handleDeleteClick(id)}
                color="inherit"
              />,
            ];
          },
        }
      ];

    return (
        <Box m={"10px 20px 0 20px"}>
          <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                <Header title="Fornecedores"/>
                <Box sx={{"& .MuiButtonBase-root:hover": { backgroundColor: `${colors.blueAccent[600]} !important` }}}>
                  <Link to={"/fornecedores/cadastro"} style={{ textDecoration: "none", fontSize: "16px", color: colors.grey[100]}}>
                    <Button sx={{backgroundColor: colors.blueAccent[700], color: "#fff", fontSize: "14px", fontWeight: "bold", padding: "10px 20px" }}>
                      <AddCircleOutlineOutlinedIcon sx={{ mr: "10px" }} />
                      Cadastro de Fornecedor
                    </Button>
                  </Link>
                </Box>
            </Box>
            <Box m={"40px 0 0 0"} height={"75vh"} sx={{
                "& .MuiDataGrid-root": {border: "none"},
                "& .MuiDataGrid-cell": {borderBottom: "none", fontSize: "14px"},
                "& .supplier-column--cell": {color: colors.greenAccent[500]},
                "& .MuiDataGrid-columnHeaders": {backgroundColor: colors.blueAccent[700], borderBottom: "none"},
                "& .MuiDataGrid-virtualScroller": {backgroundColor: colors.primary[400]},
                "& .MuiDataGrid-footerContainer": {borderTop: "none", backgroundColor: colors.blueAccent[700]},
                "& .MuiCheckbox-root": {color: `${colors.greenAccent[200]} !important`},
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {color: `${colors.grey[100]} !important`}
            }}>
                <DataGrid rows={mockDataSuppliers} columns={columns} slots={{ toolbar: GridToolbar }} slotProps={{ toolbar: {showQuickFilter: true }}}/>
            </Box>
        </Box>
    )
}

const handleEditClick = (id) => () => {
  console.log(id)
};

const handleDeleteClick = (id) => () => {
  console.log(id)
};

export default Supplier;