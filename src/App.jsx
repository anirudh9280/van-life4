import './App.css'
import About from "./pages/About.jsx"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home.jsx"

function App() { 
  return (
    <BrowserRouter>
    <header>
      <nav>
        <Link className="site-logo" to="/">#VANLFIE</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
