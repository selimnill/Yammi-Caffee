import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Pages/HomePage/Home/SharedComponents/Footer";
import Navbar from "../../Pages/HomePage/Home/SharedComponents/Navbar";

const MainLayouts = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayouts;
