import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/common/Header";
import Footer from "../Components/common/Footer";

const Layout = () => {
  return (
    <div>
  <Header/>
      <Outlet />
<Footer/>
    </div>
  );
};

export default Layout;
