import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages";
import CrearPage from "./pages/crear";
import NavBar from "./components/NavBar";
import ListadoPage from "./pages/listado";
import ArticuloPorId from "./pages/articulo-id";
import Footer from "./components/Footer";
import EditarArticulo from "./pages/editar-articulo";

function App() {

  return (
    <>
      <NavBar/>
      <div >
        <BrowserRouter>
          <Routes>
            <Route Component={IndexPage} path="/" />
            <Route Component={CrearPage} path="/crear" />
            <Route Component={ListadoPage} path="/listado" />
            <Route Component={ArticuloPorId} path="/articulo/:id" />
            <Route Component={EditarArticulo} path="/listado/edit/:id" />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer/>
    </>
  )
}

export default App
