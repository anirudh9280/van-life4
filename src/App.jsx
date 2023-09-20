import './App.css'
import About from "./pages/About.jsx"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home.jsx"
import "./server.js"
import Vans from "./pages/Vans"

function App() { 
  return (
    <BrowserRouter>
    <header>
      <nav>
        <Link className="site-logo" to="/">#VANLFIE</Link>
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </nav>
    </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
