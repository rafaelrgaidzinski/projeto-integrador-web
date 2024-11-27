import { Box, useTheme, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataProducts } from "../../data/mockData";
import { Link } from "react-router-dom";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Header from "../../components/Header";


const Products = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        {
          field: "product",
          headerName: "Produto",
          type: "string",
          flex: 1,
          cellClassName: "medicine-column--cell",
        },
        {
          field: "category",
          headerName: "Categoria",
          type: "string",
          headerAlign: "left",
          align: "left",
        },
        {
          field: "supplier",
          headerName: "Fornecedor",
          type: "string",
          flex: 1,
        },
        {
          field: "barCode",
          headerName: "Código de Barras",
          type: "number",
          headerAlign: "left",
          align: "left",
        },
        {
          field: "purchaseprice",
          headerName: "Preço de Compra",
          type: "number",
          headerAlign: "left",
          align: "left",
        },
        {
          field: "salesprice",
          headerName: "Preço de Venda",
          type: "number",
          headerAlign: "left",
          align: "left",
        },
        {
          field: "quantity",
          headerName: "Quantidade",
          type: "number",
          flex: 1,
        },
        
        {
          field: "freeprogram",
          headerName: "Farmácia Popular",
          type: "boolean",
          flex: 1,
        },
        {
          field: "recipe",
          headerName: "Receita",
          type: "boolean",
          flex: 1,
        }
      ];

    return (
        <Box m={"20px"}>
          <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
              <Header title="Produtos"/>
              <Box sx={{"& .MuiButtonBase-root:hover": { backgroundColor: `${colors.blueAccent[600]} !important` }}}>
                <Link to={"/produtos/cadastro"} style={{ textDecoration: "none", fontSize: "16px", color: colors.grey[100]}}>
                  <Button sx={{backgroundColor: colors.blueAccent[700], color: "#fff", fontSize: "14px", fontWeight: "bold", padding: "10px 20px" }}>
                    <AddCircleOutlineOutlinedIcon sx={{ mr: "10px" }} />
                    Cadastro de Produto
                  </Button>
                </Link>
              </Box>
          </Box>
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
                <DataGrid checkboxSelection rows={mockDataProducts} columns={columns} slots={{ toolbar: GridToolbar }} slotProps={{ toolbar: {showQuickFilter: true }}}/>
            </Box>
        </Box>
    )
}

export default Products;