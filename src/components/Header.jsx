import React from 'react'
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header>
      <nav>
        <Link className="site-logo" to="/">#VANLFIE</Link>
        <Link to="/host">Host</Link>
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </nav>
    </header>
    )
}