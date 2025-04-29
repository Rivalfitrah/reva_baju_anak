import React from "react";
import Alamat from "../../components/akun/Alamat";
import SidebarProfile from "../../components/akun/SidebarProfil";
import Navbar from "../../components/Navbar";

function AlamatPage() {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="flex gap-2 container mx-auto max-w-7xl px-4">
        <SidebarProfile />
        <Alamat />
      </div>
    </div>
  );
}

export default AlamatPage;
