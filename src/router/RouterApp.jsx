import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../views/Home"
import { NotFound } from "../views/NotFound"
import { Login } from "../views/Login"
import { RouteProtected } from "../components/RouteProtected"
import Register  from "../views/Register" // nueva ruta 
import { Acerca } from "../views/Acerca"

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RouteProtected><Home /></RouteProtected>} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/acerca" element={<Acerca />} />
      </Routes>
    </BrowserRouter>
  )
}

export { RouterApp }