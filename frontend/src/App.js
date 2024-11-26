import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router';
import Topbar from "./components/Topbar"
import SidebarMenu from "./components/SidebarMenu"
import Dashboard from "./pages/dashboard/DashboardPage"
import Settings from "./pages/configuracoes/SettingsPage"
import Clients from "./pages/clientes/ClientsPage"
import ClientsForm from './pages/clientes/ClientsForm';
import Suppliers from "./pages/fornecedores/SuppliersPage"
import SuppliersForm from './pages/fornecedores/SuppliersForm';


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
                <Route path='/clientes/cadastro' element={<ClientsForm/>} />
                <Route path='/fornecedores' element={<Suppliers/>} />
                <Route path='/fornecedores/cadastro' element={<SuppliersForm/>} />
              </Routes>
            </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>    
  );
};

export default App;