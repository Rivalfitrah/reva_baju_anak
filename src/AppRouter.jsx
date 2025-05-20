import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import NotFoundPage from "./pages/NotFoundPage";
import ProductPage from "./pages/ProductPage";
import ProfilUserPage from "./pages/profile/ProfilUserPage";
import HistoryPage from "./pages/profile/HistoryPage";
import KeranjangPage from "./pages/Keranjang";
import ProductDetail from "./pages/ProductDetail";
import CreateAkun from "./pages/CreateAkun";
import CheckoutSteps from "./components/Checkoutsteps";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/profil" element={<ProfilUserPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/keranjang" element={<KeranjangPage />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
        <Route path="/tambah-akun" element={<CreateAkun />} />
        <Route path="/bayar" element={<CheckoutSteps />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
