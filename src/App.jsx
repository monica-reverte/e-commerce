
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './Pages/Home/Home';
import { Cart } from './Pages/Cart/Cart';
import CartContextProvider from './context/cartContext';





function App() {






  return (
    <CartContextProvider>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
      </Routes>
      
    </BrowserRouter>
    </CartContextProvider>

  );
}

export default App;
