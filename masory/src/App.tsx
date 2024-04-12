import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages";
import CrearPage from "./pages/crear";
import NavBar from "./components/NavBar";
import ListadoPage from "./pages/listado";
import ArticuloPorId from "./pages/articulo-id";
import Footer from "./components/Footer";
import EditarArticulo from "./pages/editar-articulo";
import login from "./pages/login";
import { UserProvider } from "./components/AuthContext";
import { Private } from "./components/PrivateRoute";
import RegistroPage from "./pages/registro";

function App() {
  return (
    <UserProvider>
      <NavBar/>
      <div >
        <BrowserRouter>
          <Routes>
            <Route Component={IndexPage} path="/" />
            <Route Component={login} path="/login" />
            <Route Component={RegistroPage} path="/registro" />
            <Route element={<Private Component={CrearPage} />} path="/crear" />
            <Route element={<Private Component={ListadoPage} />} path="/listado" />
            <Route element={<Private Component={EditarArticulo} />} path="/listado/edit/:id" />
            <Route Component={ArticuloPorId} path="/articulo/:id" />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer/>
    </UserProvider>
  )
}

export default App
