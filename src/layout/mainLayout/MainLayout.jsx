import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function MainLayout() {
  return (
    <>
      {/* header */}
      <Header />

      <main>
        <Outlet />
      </main>
      
      {/* <Footer /> */}
      {/* footer */}
    </>
  );
}

export default MainLayout;
