import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbars from "./assets/components/Navbars"
import Home from "./assets/pages/Home"
import Footer from "./assets/components/Footer"
import Pizza from "./assets/pages/Pizza"
import Cart from "./assets/pages/Cart"
import Register from "./assets/pages/Register"
import Login from "./assets/pages/Login"
import Profile from "./assets/components/Profile"
import NotFound from "./assets/components/NotFound"
import Header from "./assets/components/Header"
import { CartProvider } from "./assets/context/CartContext";

function App() {
  return (
    <Router>
      <CartProvider>
      <>
        <Navbars />
        <Header 
            title={'¡Pizzería Mamma Mia!'}
            subtitle={'¡Tenemos las mejores pizzas que podrás encontrar!'}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/p001" element={<Pizza />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        <Footer />
      </>
      </CartProvider>
    </Router>
  );
}

export default App;
