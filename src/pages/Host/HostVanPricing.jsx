import React from 'react'
import {useOutletContext} from "react-router-dom"

export default function HostVanPricing() {
    const [vanDetails, setVanDetails] = useOutletContext()
  return (
    <div>
        <h1 className="host-van-price">${vanDetails.price}.00<span>/day</span></h1>
    </div>
  )
}
