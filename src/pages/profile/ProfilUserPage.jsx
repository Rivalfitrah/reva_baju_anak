import React from "react";
import SidebarProfile from "../../components/akun/SidebarProfil";
import Navbar from "../../components/Navbar";
import UserProfil from "../../components/akun/UserProfil";


function ProfilUserPage() {
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
        <UserProfil />
      </div>
    </>
  );
}

export default ProfilUserPage;
