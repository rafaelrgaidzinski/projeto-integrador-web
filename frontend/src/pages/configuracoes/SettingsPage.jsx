import { Box, Button, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataEmployees } from "../../data/mockData";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';


const Settings = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        {
          field: "name",
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
          field: "hiredate",
          headerName: "Data de Contratação",
          type: "Date",
          headerAlign: "left",
          align: "left",
        },
        {
          field: "salary",
          headerName: "Salário",
          type: "number",
          headerAlign: "left",
          align: "left",
        },
        {
          field: "role",
          headerName: "Cargo",
          flex: 1,
          renderCell: ({ row: { role } }) => {
            return (
              <Box
                width="60%"
                m="10px auto"
                p="5px"
                display="flex"
                justifyContent="center"
                backgroundColor={
                  role === "admin"
                    ? colors.greenAccent[600]
                    : colors.greenAccent[700]
                }
                borderRadius="4px"
              >
                {role === "admin" && <AdminPanelSettingsOutlinedIcon />}
                {role === "gerente" && <SecurityOutlinedIcon />}
                {role === "atendente" && <LockOpenOutlinedIcon />}
                <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                  {role}
                </Typography>
              </Box>
            );
          },
        },
      ];

    return (
        <Box m={"10px 20px 0 20px"}>
          <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
              <Header title="Configurações"/>
              <Box sx={{"& .MuiButtonBase-root:hover": { backgroundColor: `${colors.blueAccent[600]} !important` }}}>
                <Link to={"/funcionarios/cadastro"} style={{ textDecoration: "none", fontSize: "16px", color: colors.grey[100]}}>
                  <Button sx={{backgroundColor: colors.blueAccent[700], color: "#fff", fontSize: "14px", fontWeight: "bold", padding: "10px 20px" }}>
                    <AddCircleOutlineOutlinedIcon sx={{ mr: "10px" }} />
                    Cadastro de Funcionários
                  </Button>
                </Link>
              </Box>
          </Box>
          <Box m={"10px 0 0 0"} height={"40vh"} sx={{
              "& .MuiDataGrid-root": {border: "none"},
              "& .MuiDataGrid-cell": {borderBottom: "none", fontSize: "14px"},
              "& .name-column--cell": {color: colors.greenAccent[500]},
              "& .MuiDataGrid-columnHeaders": {backgroundColor: colors.blueAccent[700], borderBottom: "none"},
              "& .MuiDataGrid-virtualScroller": {backgroundColor: colors.primary[400]},
              "& .MuiDataGrid-footerContainer": {borderTop: "none", backgroundColor: colors.blueAccent[700]},
              "& .MuiCheckbox-root": {color: `${colors.greenAccent[200]} !important`}
          }}>
              <DataGrid rows={mockDataEmployees} columns={columns}/>
          </Box>
        </Box>
    )
}

export default Settings;