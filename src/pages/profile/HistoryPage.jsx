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
      <div className="flex flex-col md:flex-row gap-4 container mx-auto max-w-7xl px-4">
        <SidebarProfile />
        <div className="flex-1"> {/* Tambahkan pembungkus dengan flex-1 */}
          <History />
        </div>
      </div>
    </>
  );
}

export default HistoryPage;
