import HomeComponent from "./components/HomeView/HomeComponent.jsx";
import Navbar from "./components/Navbar/Navbar.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsComponent from "./components/ProductsView/ProductsComponent.jsx";
import ContactComponent from "./components/ContactView/ContactComponent.jsx";
import SingleProd from "./components/ProductView/SingleProd.jsx";


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomeComponent/>} />
        <Route exact path="/products" element={<ProductsComponent/>} />
        <Route exact path="/product/:prodId" element={<SingleProd/>} />
        <Route exact path="/contact" element={<ContactComponent/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
