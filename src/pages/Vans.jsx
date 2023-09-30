import React from 'react'
import {Outlet, Link, useSearchParams} from "react-router-dom"
export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type")
    console.log(typeFilter)
    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/vans").then(res => res.json()).then(data => setVans(data.vans))
        
    }, [])
    const filteredElements = typeFilter ? vans.filter(van => van.type === typeFilter) : vans
    const vanElements = filteredElements.map(van => {
        return (
        <Link to={`/vans/${van.id}`}>
            <div key={van.id} className="van-tile">
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </div>
        </Link>
        )
    })
  return (
    <>
        <div className="van-list-container">
            <button className="van-type simple" onClick={(() => setSearchParams({type: "simple"}))}>Simple</button>
            <button className="van-type rugged" onClick={(() => setSearchParams({type: "rugged"}))}>Rugged</button>
            <button className="van-type clear-filters" onClick={(() =>setSearchParams({type: ""}))}>Clear Filters</button>

            <h1>Explore Our Van Options!</h1>
            <div className="van-list">{vanElements}</div>
        </div>
    </>
  )
}
