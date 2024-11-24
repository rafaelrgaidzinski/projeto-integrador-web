import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router';
import Topbar from "./components/Topbar"
import SidebarMenu from "./components/SidebarMenu"
import Dashboard from "./pages/dashboard/DashboardPage"
import Settings from "./pages/configuracoes/SettingsPage"
import Clients from "./pages/clientes/ClientsPage"
import ClientsForm from './pages/clientes/ClientsForm';
// import Purchase from "./pages/compras/PurchasePage"
// import Login from "./pages/login/LoginPage"
// import Register from "./pages/login/RegisterPage"
// import Products from "./pages/produtos/ProductsPage"
// import Sales from "./pages/vendas/SalesPage"


const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className='app'>
          <SidebarMenu/>
            <main className='content'>
              <Topbar></Topbar>
              <Routes>
                <Route path='/' element={<Dashboard/>} />
                <Route path='/configuracoes' element={<Settings/>} />
                <Route path='/clientes' element={<Clients/>} />
                <Route path='/calendario' element={<ClientsForm/>} />
                {/* <Route path='/register' element={<Register/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/produtos' element={<Products/>} />
                <Route path='/vendas' element={<Sales/>} />
                <Route path='/compras' element={<Purchase/>} />
                <Route path='/calendario' element={<Calendar/>} />
                <Route path='/relatorios' element={<Report/>} /> */}
              </Routes>
            </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>    
  );
};

export default App;