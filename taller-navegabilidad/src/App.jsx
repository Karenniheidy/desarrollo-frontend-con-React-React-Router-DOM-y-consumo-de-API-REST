import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

// Componentes y páginas
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Dashboard from "./pages/Dashboard";
import Nav from "./components/Nav";
import Productos from "./pages/Productos";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/registro" element={<Registro></Registro>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/productos" element={<Productos></Productos>}></Route>
        <Route path="/contacto" element={<Contacto></Contacto>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;