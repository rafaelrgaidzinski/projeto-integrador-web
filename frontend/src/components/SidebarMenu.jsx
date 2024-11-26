import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../theme";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import MedicationOutlinedIcon from '@mui/icons-material/MedicationOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Item = ({ icon, title, to, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Link to={to} style={{ textDecoration: "none", fontSize: "16px", color: colors.grey[100]}}>
    <MenuItem active={selected === title} style={{ color: colors.grey[100] }} onClick={() => setSelected(title)} icon={icon}>
      <Typography>{title}</Typography>
      </MenuItem>
    </Link>
  );
};

const SidebarMenu = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box sx={{ display: "flex", height: "100%",
            "& .MuiButtonBase-root .MuiSvgIcon-root": { color: `${colors.grey[100]} !important`, backgroundColor: "transparent !important",},
            "& .ps-menu-button.ps-active p": { color: `${colors.greenAccent[500]} !important`, backgroundColor: "transparent !important" },
            "& .ps-menu-button.ps-active svg": { color: `${colors.greenAccent[500]} !important`, backgroundColor: "transparent !important" },
            "& .ps-menu-button:hover": { backgroundColor: "transparent !important" },
          }}>
            
          <Sidebar breakPoint="md" backgroundColor={colors.primary[400]} rootStyles={{border: "none"}} collapsed={isCollapsed}>
              <Menu iconShape="square" >

                {/* LOGO AND MENU ICON */}
                <MenuItem
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                  style={{ margin: "10px 0 20px 0", color: colors.grey[100]}}
                >
                  {!isCollapsed && (
                    <Box display="flex" justifyContent="space-between" alignItems="center" ml={"5px"}>
                      <Typography variant="h3" color={colors.grey[100]}> Pharmacontrol </Typography>
                      <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                        <MenuOutlinedIcon />
                      </IconButton>
                    </Box>
                  )}
                </MenuItem>

                {/* USER */}
                {!isCollapsed && (
                    <Box mb={"25px"}>
                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                            <img alt="profile-user" width={"100px"} height={"100px"} src={`../../assets/user.png`} style={{cursor: "pointer", borderRadius:"50%" }}  />
                        </Box>
                        <Box textAlign={"center"}>
                            <Typography variant="h2" color={colors.grey[100]} fontWeight={"bold"} sx={ { m: "10px 0 0 0" }}> Rafael </Typography>
                            <Typography variant="h5" color={colors.grey[300]}> Admin </Typography>
                        </Box>
                    </Box>
                )}

                {/* MENU ITENS */}
                <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                  <Item title="Dashboard" to="/" icon={<HomeOutlinedIcon/>} selected={selected} setSelected={setSelected} />
                  <Item title="Produtos" to="/produtos" icon={<MedicationOutlinedIcon/>} selected={selected} setSelected={setSelected} />
                  <Item title="Clientes" to="/clientes" icon={<PeopleOutlinedIcon/>} selected={selected} setSelected={setSelected} />
                  <Item title="Fornecedores" to="/fornecedores" icon={<StoreOutlinedIcon/>} selected={selected} setSelected={setSelected} />
                  <Item title="Vendas" to="/vendas" icon={<AttachMoneyOutlinedIcon/>} selected={selected} setSelected={setSelected} />
                  <Item title="Compras" to="/compras" icon={<ShoppingCartOutlinedIcon/>} selected={selected} setSelected={setSelected} />
                  <Item title="Relatorios" to="/relatorios" icon={<AssessmentOutlinedIcon/>} selected={selected} setSelected={setSelected} />
                  <Item title="Configurações" to="/configuracoes" icon={<SettingsOutlinedIcon/>} selected={selected} setSelected={setSelected} />
                </Box>
              </Menu>
          </Sidebar>
        </Box>
    );
}

export default SidebarMenu;