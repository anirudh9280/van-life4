import React from 'react'
import { NavLink, Link } from "react-router-dom"
import Avatar from "../assets/avatar-icon.png"

export default function Header() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  }
  function fakeLogOut() {
    localStorage.removeItem("loggedin")
  }
  return (
    <header>
      <nav>
        <NavLink className="site-logo" to="/">#VANLFIE</NavLink>
        <NavLink style={({isActive}) => isActive ? activeStyle : null}to="/host">Host</NavLink>
        <NavLink style={({isActive}) => isActive ? activeStyle : null}to="/about">About</NavLink>
        <NavLink style={({isActive}) => isActive ? activeStyle : null}to="/vans">Vans</NavLink>
        <Link to="login" className="login-link">
          <img
            src={Avatar}
            className="login-icon"
          />
        </Link>
        <button onClick={fakeLogOut}>X</button>
      </nav>
    </header>
    )
}