
import {Router, Routes, Route } from "react-router-dom"; 
import MainLayout from "../layout/MainLayout";
import About from "../Pages/About";
import Home from "../Pages/Home";

const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<MainLayout />}>
         <Route index element={<Home />} />
         <Route path="about" element={<About />} />
        </Route>
    </Routes>
    
  )
}   

  export default Routing;