import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home"
import {Route, Routes} from "react-router-dom"
import Products from './components/Products';
import Product from './components/Product';
import { Cart } from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
   <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/products/:id" element={<Product />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/checkout" element={<Checkout />}/>
      </Routes>
   </>
  );
}

export default App;
