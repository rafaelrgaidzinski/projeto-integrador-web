import * as React from 'react';
import { Box, Button, useTheme} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataSales } from "../../data/mockData";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import Header from "../../components/Header";
import AddProductDialog from "../../components/ProductDialog"
import PaymentDialog from '../../components/PaymentDialog';

function CustomFooter(props) {

    const total = props.mockDataSales.reduce((sum, row) => sum + row.total, 0);

    return (
        <Box sx={{ textAlign: 'right', background: props.colors.blueAccent[700], color: "#fff" }}>
            <h3 style={{marginRight: "20px", fontSize:"14px"}}>Preço Total: R${total.toFixed(2)}</h3>
        </Box>
    );
}

const Sales = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [openPayment, setOpenPayment] = React.useState(false);
    const [openAddProduct, setOpenAddProduct] = React.useState(false);

    const handleClickOpenPayment = () => {
        setOpenPayment(true);
    };

    const handleClosePayment = () => {
        setOpenPayment(false);
    };

    const handleClickOpenAddProduct = () => {
        setOpenAddProduct(true);
    };

    const handleCloseAddProduct = () => {
        setOpenAddProduct(false);
    };
 
    const columns = [
        {
          field: "product",
          headerName: "Produto",
          type: "string",
          headerAlign: "left",
          align: "left",
          flex: 2,
          cellClassName: "product-column--cell"
        },
        {
          field: "supplier",
          headerName: "Fornecedor",
          type: "string",
          headerAlign: "left",
          align: "left",
          flex: 1
        },
        {
          field: "barcode",
          headerName: "Código de Barras",
          type: "string",
          headerAlign: "left",
          align: "left",
          flex: 1
        },
        {
          field: "freeprogram",
          headerName: "Farmácia Popular",
          type: "boolean",
          headerAlign: "center",
          align: "center",
          flex: 1
        },
        {
          field: "recipe",
          headerName: "Receita",
          type: "boolean",
          headerAlign: "center",
          align: "center",
          flex: 1
        },
        {
          field: "price",
          headerName: "Preço",
          type: "number",
          headerAlign: "center",
          align: "center",
          flex: 1
        },
        {
          field: "quantity",
          headerName: "Quantidade",
          type: "number",
          headerAlign: "center",
          align: "center",
          flex: 1
        },
        {
          field: "total",
          headerName: "Total",
          type: "number",
          headerAlign: "center",
          align: "center",
          flex: 1
        }
      ];

    return (
        <Box m={"10px 20px 0 20px"}>
            <Header title={"Cadastro de Vendas"}/>
            <Box m={"10px 0 0 0"} height={"40vh"} sx={{
                "& .MuiDataGrid-root": {border: "none"},
                "& .MuiDataGrid-cell": {borderBottom: "none", fontSize: "14px"},
                "& .product-column--cell": {color: colors.greenAccent[500]},
                "& .MuiDataGrid-columnHeaders": {backgroundColor: colors.blueAccent[700], borderBottom: "none"},
                "& .MuiDataGrid-virtualScroller": {backgroundColor: colors.primary[400]},
                "& .MuiDataGrid-footerContainer": {borderTop: "none", backgroundColor: colors.blueAccent[700]},
                "& .MuiCheckbox-root": {color: `${colors.greenAccent[200]} !important`},
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {color: `${colors.grey[100]} !important`}
            }}>
                <DataGrid rows={mockDataSales} columns={columns}  slots={{footer: CustomFooter}} slotProps={{footer: { mockDataSales, colors }}}/>
            </Box>
            <Box display="flex" justifyContent="end" mt="30px" sx={{"& .MuiButtonBase-root:hover": { backgroundColor: `${colors.blueAccent[600]} !important` }}}>
                <Box>
                    <Button onClick={handleClickOpenAddProduct} variant="contained" sx={{backgroundColor: colors.blueAccent[700], color: "#fff", fontSize: "14px", fontWeight: "bold", padding: "10px 20px", width: "250px", mb:"50px", mr:"20px"}}>
                        <AddShoppingCartOutlinedIcon sx={{ mr: "10px" }} />
                        Adicionar Produto
                    </Button>
                </Box>
                <Box>
                    <Button onClick={handleClickOpenPayment} variant="contained" sx={{backgroundColor: colors.blueAccent[700], color: "#fff", fontSize: "14px", fontWeight: "bold", padding: "10px 20px", width: "250px", mb:"50px"}}>
                        <PaymentsOutlinedIcon sx={{ mr: "10px" }} />
                        Efetuar Pagamento
                    </Button>
                </Box>
            </Box>
            <AddProductDialog open={openAddProduct} handleClickOpen={handleClickOpenAddProduct} handleClose={handleCloseAddProduct}/>
            <PaymentDialog open={openPayment} handleClickOpen={handleClickOpenPayment} handleClose={handleClosePayment} page={"clientes"}/>
        </Box>
    )
}

export default Sales;




