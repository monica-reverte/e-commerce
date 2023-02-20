import * as React from 'react';
import './App.css';
import { Header } from "./components/Header";
import { SearchBar } from "./components/Header";
import { NavBar } from "./components/Header";
import { ProductsList } from "./components/Products";
import { Footer } from "./components/footer";




function App() {
  return (
    <div className="App">

      <Header />
      <SearchBar />
      <NavBar />
      <ProductsList />
      <Footer />

      
    </div>
  );
}

export default App;
