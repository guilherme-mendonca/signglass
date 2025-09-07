import { Routes, Route } from "react-router"
import { Home } from "../Home.jsx"
import { Produtos } from "../pages/Produtos.jsx"
import { Login } from "../components/login/Login"
import { Cadastro } from "../components/login/Cadastro"
import { NotFound } from "./NotFound.jsx"
import { Membros } from "./Membros.jsx"
import { Jogo } from "./Jogo.jsx"
import { Referencias } from "./Referencias.jsx"
import { Ajuda } from "./Ajuda.jsx"

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="produtos" element={<Produtos />} />
            <Route path="/membros" element={<Membros />} />
            <Route path="/jogo" element={<Jogo />} />
            <Route path="/referencias" element={<Referencias />} />
            <Route path="/ajuda" element={<Ajuda />} />
            <Route path="*" element={<NotFound />} />
        </Routes>

    )
}