
import {Router, Routes, Route } from "react-router-dom"; 
import MainLayout from "../layout/MainLayout";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import ProductsPage from "../Pages/ProductsPage";
// Import the newly created Custom Design page component
import CustomDesign from "../Pages/CustomDesign";

const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<MainLayout />}>
         <Route index element={<Home />} />
         <Route path="about" element={<About />} />
         <Route path="contact" element={<Contact />} />
         <Route path="products" element={<ProductsPage />} />
         {/* Added new route for the Custom Design page */}
         <Route path="custom-design" element={<CustomDesign />} />
        </Route>
    </Routes>
    
  )
}   

  export default Routing;