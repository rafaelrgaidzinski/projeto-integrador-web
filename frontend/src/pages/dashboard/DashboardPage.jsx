import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import Header from "../../components/Header";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import MedicationOutlinedIcon from '@mui/icons-material/MedicationOutlined';
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import LineChart from "../../components/LineChart";
import PieChart from "../../components/PieChart";
import StatBox from "../../components/StatBox";

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m={"20px"}>
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                <Header title="Dashboard"/>
            </Box>

            {/* GRID & CHARTS */}
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="130px" gap="15px">

                {/* ROW 1 */}
                <Box gridColumn="span 2" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                    <StatBox title="R$ 30.000,00" subtitle="Vendas" progress="0.75" increase="+75%" 
                        icon={ <AttachMoneyOutlinedIcon sx={{ color: colors.greenAccent[600], fontSize: "30px" }}/>} 
                    />
                </Box>
                <Box gridColumn="span 2" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                    <StatBox title="R$ 10.000,00" subtitle="Compras" progress="0.21" increase="+21%" 
                        icon={ <ShoppingCartOutlinedIcon sx={{ color: colors.greenAccent[600], fontSize: "30px" }}/>} 
                    />
                </Box>
                <Box gridColumn="span 2" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                    <StatBox title="R$ 20.000,00" subtitle="Saldo" progress="0.54" increase="+54%" 
                        icon={ <PointOfSaleIcon sx={{ color: colors.greenAccent[600], fontSize: "30px"}}/>} 
                    />
                </Box>
                <Box gridColumn="span 2" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                    <StatBox title="20" subtitle="Produtos"
                        icon={ <MedicationOutlinedIcon sx={{ color: colors.greenAccent[600], fontSize: "30px" }}/>} 
                    />
                </Box>
                <Box gridColumn="span 2" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                    <StatBox title="10" subtitle="Clientes" 
                        icon={ <PeopleOutlineOutlinedIcon sx={{ color: colors.greenAccent[600], fontSize: "30px" }}/>} 
                    />
                </Box>
                <Box gridColumn="span 2" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                    <StatBox title="8" subtitle="Fornecedores" 
                        icon={ <StoreOutlinedIcon sx={{ color: colors.greenAccent[600], fontSize: "30px" }}/>} 
                    />
                </Box>
            
                {/* ROW 2 */}
                <Box gridColumn="span 12" gridRow="span 2" backgroundColor={colors.primary[400]}>
                    <Box mt="25px" p="10px 30px" display="flex " justifyContent="space-between" alignItems="center" >
                        <Box>
                            <Typography variant="h3" fontWeight="600" color={colors.grey[100]}>
                                Saldo Mensal
                            </Typography>
                        </Box>
                    </Box>
                    <Box height="235px" m="-30px 0 0 0">
                        <LineChart isDashboard={true} />
                    </Box>
                </Box>
               
                {/* ROW 3 */}
                <Box
                gridColumn="span 3"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
                overflow="auto"
                >
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    borderBottom={`4px solid ${colors.primary[500]}`}
                    colors={colors.grey[100]}
                    p="15px"
                >
                    <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                    Vendas Recentes
                    </Typography>
                </Box>
                {mockTransactions.map((transaction, i) => (
                    <Box
                    key={`${transaction.txId}-${i}`}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    borderBottom={`4px solid ${colors.primary[500]}`}
                    p="15px"
                    >
                    <Box>
                        <Typography
                        color={colors.greenAccent[500]}
                        variant="h5"
                        fontWeight="600"
                        >
                        {transaction.txId}
                        </Typography>
                        <Typography color={colors.grey[100]}>
                        {transaction.user}
                        </Typography>
                    </Box>
                    <Box color={colors.grey[100]}>{transaction.date}</Box>
                    <Box
                        backgroundColor={colors.greenAccent[500]}
                        p="5px 10px"
                        borderRadius="4px"
                    >
                        ${transaction.cost}
                    </Box>
                    </Box>
                ))}
                
                </Box>
                <Box
                gridColumn="span 3"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
                overflow="auto"
                >
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    borderBottom={`4px solid ${colors.primary[500]}`}
                    colors={colors.grey[100]}
                    p="15px"
                >
                    <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                    Compras Recentes
                    </Typography>
                </Box>
                {mockTransactions.map((transaction, i) => (
                    <Box
                    key={`${transaction.txId}-${i}`}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    borderBottom={`4px solid ${colors.primary[500]}`}
                    p="15px"
                    >
                    <Box>
                        <Typography
                        color={colors.greenAccent[500]}
                        variant="h5"
                        fontWeight="600"
                        >
                        {transaction.txId}
                        </Typography>
                        <Typography color={colors.grey[100]}>
                        {transaction.user}
                        </Typography>
                    </Box>
                    <Box color={colors.grey[100]}>{transaction.date}</Box>
                    <Box
                        backgroundColor={colors.greenAccent[500]}
                        p="5px 10px"
                        borderRadius="4px"
                    >
                        ${transaction.cost}
                    </Box>
                    </Box>
                ))}
                </Box>
                <Box gridColumn="span 6" gridRow="span 2" backgroundColor={colors.primary[400]}>
                    <Typography variant="h5" fontWeight="600" sx={{ padding: "30px 30px 0 30px" }}>
                        Categorias
                    </Typography>
                    <Box height="250px" mt="-20px">
                        <PieChart isDashboard={true} />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Dashboard;