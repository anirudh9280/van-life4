import React from 'react'
import { useOutletContext } from "react-router-dom"

export default function HostVanInfo() {
    const [vanDetails, setVanDetails] = useOutletContext();
    console.log(vanDetails)
  return (

    <section className="host-van-detail-info">
        <h4>Name: <span>{vanDetails.name}</span></h4>
        <h4>Category: <span>{vanDetails.type.charAt(0).toUpperCase() + vanDetails.type.slice(1)}</span></h4>
        <h4>Description: <span>{vanDetails.description}</span></h4>
        <h4>Visibility: <span>Public</span></h4>
    </section>
  )
}
