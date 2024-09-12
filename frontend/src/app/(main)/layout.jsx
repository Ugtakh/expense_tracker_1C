"use client";

import { Header } from "../components";
import { DashboardProvider } from "../context/dashboard-context";

const Layout = ({ children }) => {
  return (
    <DashboardProvider>
      <Header />
      <main className="bg-[#F3F4F6] h-screen">{children}</main>
    </DashboardProvider>
  );
};

export default Layout;
