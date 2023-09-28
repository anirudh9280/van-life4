import React from 'react'
import { NavLink } from "react-router-dom"

export default function Header() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  }
  return (
    <header>
      <nav>
        <NavLink className="site-logo" to="/">#VANLFIE</NavLink>
        <NavLink style={({isActive}) => isActive ? activeStyle : null}to="/host">Host</NavLink>
        <NavLink style={({isActive}) => isActive ? activeStyle : null}to="/about">About</NavLink>
        <NavLink style={({isActive}) => isActive ? activeStyle : null}to="/vans">Vans</NavLink>
      </nav>
    </header>
    )
}