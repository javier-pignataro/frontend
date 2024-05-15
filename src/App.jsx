import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Components/layout/Layout";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Legal from "./Routes/Legal";
import Detail from "./Routes/Detail";
import ImageGallery from "./Routes/ImageLibrary"
import Search from "./Routes/Search"
import Administracion from "./Routes/Administracion"
import ListaVehiculos from "./Routes/ListaVehiculos"

import './styles/styles.scss'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/cars/:id" element={<Detail />} />
            <Route path="/cars/:id/images" element={<ImageGallery />} />
            <Route path="/search/:search?" element={<Search />} />
            <Route path="/administracion" element={<Administracion />} />
            <Route path="/administracion/listavehiculos" element={<ListaVehiculos />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
