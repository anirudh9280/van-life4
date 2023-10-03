import './App.css'
import About from "./pages/About.jsx"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home.jsx"
import "./server.js"
import Vans from "./pages/Vans"
import VanDetail from './pages/VanDetail'
import Layout from "./components/Layout.jsx"
import Dashboard from "./pages/Host/Dashboard.jsx"
import Income from "./pages/Income.jsx"
import Reviews from "./pages/Reviews.jsx"
import HostLayout from "./components/HostLayout"
import HostVans from "./pages/Host/HostVans"
import HostVanDetails from "./pages/Host/HostVansDetails"
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import Login from "./pages/Login"
import HandleError from "./pages/HandleError"
import AuthenticatedLayout from "./components/AuthenticatedLayout"

function App() { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="login" element={<Login />} />
          
          <Route element={<AuthenticatedLayout />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetails />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>
          </Route>
        <Route path="*" element={<HandleError />} />
        </Route>
      </Routes>
    </BrowserRouter>
  
  )
}

export default App
