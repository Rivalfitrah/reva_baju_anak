import React from "react";
import Navbar from "../../components/Navbar";
import SidebarProfile from "../../components/akun/SidebarProfil";
import History from "../../components/akun/History";

function HistoryPage() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="flex gap-2 container mx-auto max-w-7xl px-4">
        <SidebarProfile />
        <History />
      </div>
    </>
  );
}

export default HistoryPage;
