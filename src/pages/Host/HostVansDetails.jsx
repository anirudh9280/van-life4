import React from 'react';
import {Link, useParams, Outlet, NavLink } from "react-router-dom"

const HostVanDetails = () => {
    const [vanDetails, setVanDetails] = React.useState(null)
    const {id} = useParams()
    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setVanDetails(data.vans))
    }, [])
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  }

    if (!vanDetails) {
        return <h1>Loading...</h1>
    }

    return (
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>

            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={vanDetails.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${vanDetails.type}`}
                        >
                            {vanDetails.type}
                        </i>
                        <h3>{vanDetails.name}</h3>
                        <h4>${vanDetails.price}/day</h4>
                    </div>
                </div>
                <nav className="host-van-detail-nav">
                    <NavLink style={({ isActive }) => isActive ? activeStyle : null} end to=".">Details</NavLink>
                    <NavLink style={({ isActive }) => isActive ? activeStyle : null} to="pricing">Pricing</NavLink>
                    <NavLink style={({ isActive }) => isActive ? activeStyle : null} to="photos">Photos</NavLink>
                </nav>
                <Outlet context={[vanDetails, setVanDetails]} />
            </div>
        </section>

    )
}

export default HostVanDetails;
