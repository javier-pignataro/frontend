import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/layout/Layout";

import Home from "./Routes/Home";

import './App.css'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>

            <Route path="/" element={<Home />}></Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
