
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LOGIN, PRIVATE, LOGOUT } from "./config/routes/paths";
import { Home } from './Pages/Home';
import { Cart } from './Pages/Cart';
import { Login } from './Pages/Login';
import { Logout } from './Pages/Logout';
import CartContextProvider from './context/cartContext';
import { AuthContextProvider } from './context/authContext';
import { PublicRoute } from './components/Router/PublicRoute';
import { PrivateRoute } from './components/Router/PrivateRoute';






function App() {

  return (
    <AuthContextProvider>
      <CartContextProvider>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<PublicRoute />}>
                <Route index element={<Home />} />
                <Route path={LOGIN} element={<Login />} />
              </Route>
              <Route path={PRIVATE} element={<PrivateRoute />}>
                <Route index element={<Cart />} />
                <Route path={LOGOUT} element={<Logout />} />
              </Route>
            </Routes>  
        </BrowserRouter>
      </CartContextProvider>
    </AuthContextProvider>
    

  );
}

export default App;
