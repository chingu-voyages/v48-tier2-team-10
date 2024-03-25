import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header/Header";
import Footer from "../components/shared/Footer/Footer";
import { DinoDataContextProvider } from "../context/DinoDataContext";
import Chart from "./Chart";

export default function Layout() {
  return (
    <DinoDataContextProvider>
      <Header />
      <Outlet />
      <Chart/>
      <Footer />
    </DinoDataContextProvider>
  );
}
