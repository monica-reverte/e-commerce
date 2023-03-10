
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LOGIN, PRIVATE, LOGOUT, EDUCATIONAL, FURNITURE, TOYS, BOOKS } from "./config/routes/paths";
import { Home } from './Pages/Home';
import { Cart } from './Pages/Cart';
import { Login } from './Pages/Login';
import { Logout } from './Pages/Logout';
import { Books, Educational, Furniture, Toys } from './components/Products';
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
                <Route path={EDUCATIONAL} element={<Educational />} />
                <Route path={FURNITURE} element={<Furniture/>} />
                <Route path={TOYS} element={<Toys />} />
                <Route path={BOOKS} element={<Books />} />
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
