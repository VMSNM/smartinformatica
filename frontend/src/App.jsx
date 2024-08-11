import { Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { Box, CssBaseline } from '@mui/material';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';
import useCreateTheme from './hooks/theme/useCreateTheme';
import { AppContainer } from './styles/main';
import './App.css';
// Layouts
import RootLayout from './layouts/RootLayout';
// Pages
import Signup from './pages/Signup';
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import Clients from './pages/Clients';
import Orders from './pages/Orders';
import Services from './pages/Services';
import Products from './pages/Products';
import Debts from './pages/Debts';
import NotFound from './pages/NotFound';
import ClientDetailsPage from './pages/ClientDetailsPage';

function App() {
  const { myTheme } = useCreateTheme();
  const { authUser } = useAuthContext();

  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline>
        <Box>
          <AppContainer>
            <Routes>
              <Route path='/' element={<RootLayout />}>
                <Route index element={<Homepage />} />
                <Route path='clients' element={<Clients />} />
                <Route path='clients/:id' element={<ClientDetailsPage />} />
                <Route path='orders' element={<Orders />} />
                <Route path='services' element={<Services />} />
                <Route path='products' element={<Products />} />
                <Route path='debts' element={<Debts />} />
                <Route path='*' element={<NotFound />} />
              </Route>
              <Route path='/signup' element={authUser ? <Navigate to={'/'} /> : <Signup />} />
              <Route path='/login' element={authUser ? <Navigate to={'/'} /> : <Login />} />
            </Routes>
          </AppContainer>
          <Toaster />
        </Box>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App;