import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* FIXED: overflow-x-hidden prevents horizontal bleed on mobile */}
      <div className="flex-1 overflow-x-hidden">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
