import React from "react";
import About from "../Pages/About";
import { Outlet } from "react-router-dom";
import Slider from "../Components/Slider";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";



const MainLayout=()=> {
  return (
<div>
<div>
<div><Navbar /></div>

<div><Outlet /></div>

<div><Footer /></div>

</div>



</div>
  )
}
    export default MainLayout 