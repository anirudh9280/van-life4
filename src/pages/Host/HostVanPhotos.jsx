import React from 'react'
import {useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
    const [vanDetails, setVanDetails] = useOutletContext();
  return (
    <div>
        <img className="host-van-detail-image" src={vanDetails.imageUrl} />
    </div>
  )
}
