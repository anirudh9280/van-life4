import React from 'react'
import {useParams, Link, useLocation} from "react-router-dom"
export default function VanDetail() {
    const params = useParams();
    const [van, setVan] = React.useState(null)
    const location = useLocation()

   React.useEffect(() => {
       const getVansData = async () => {
           const response = await fetch(`/api/vans/${params.id}`);
           const data = await response.json()
           setVan(data.vans)
       }
       getVansData()
   }, [params.id])
   const search = location.state?.search || ""
   const insideText = location.state?.search.slice(6) || "all"
  return (
      <div className="van-detail-container">
          <Link
              to={`..${search}`}
              relative="path"
              className="back-button"
          >&larr; <span>Back to {insideText} vans</span></Link>
          {van ? (
              <div className="van-detail">
                  <img src={van.imageUrl} />
                  <i className={`van-type ${van.type} selected`}>{van.type}</i>
                  <h2>{van.name}</h2>
                  <p className="van-price"><span>${van.price}</span>/day</p>
                  <p>{van.description}</p>
                  <button className="link-button">Rent this van</button>
              </div>
          ) : <h2>Loading...</h2>}
      </div>
  )
}
