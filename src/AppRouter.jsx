import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFoundPage from "./pages/NotFoundPage";
import ProductPage from "./pages/ProductPage";
import ProfilPage from "./pages/ProfilPage";
import HistoryPage from "./pages/HistoryPage";

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
                <Route path="/profil" element={<ProfilPage/>} />
                <Route path="/history" element={<HistoryPage/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoute;