import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFoundPage from "./pages/NotFoundPage";
import ProductPage from "./pages/ProductPage";
import ProfilUserPage from "./pages/ProfilUserPage";
import HistoryPage from "./pages/HistoryPage";
import DashboardPage from "./pages/DashboardPage";
import KeranjangPage from "./pages/Keranjang";
import ProductDetail from "./pages/ProductDetail";
import CreateAkun from "./pages/CreateAkun";
import AlamatPage from "./pages/AlamatPage";
import CheckoutSteps from "./components/Checkoutsteps";

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/about" element={<AboutPage/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="*" element ={<NotFoundPage/>}/>
                <Route path="/product" element={<ProductPage/>} />
                <Route path="/profil" element={<ProfilUserPage/>} />
                <Route path="/history" element={<HistoryPage/>} />
                <Route path="/dashboard" element={<DashboardPage/>}/>
                <Route path="/keranjang" element={<KeranjangPage/>}/>
                <Route path="/detail" element={<ProductDetail/>}/>
                <Route path="/tambah-akun" element={<CreateAkun/>}/>
                <Route path="/alamat" element={<AlamatPage/>}/>
                <Route path="/bayar" element={<CheckoutSteps/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoute;