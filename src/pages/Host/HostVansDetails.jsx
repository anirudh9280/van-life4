import React from 'react';
import {useParams} from "react-router-dom"

const HostVanDetails = () => {
    const [vanDetails, setVanDetails] = React.useState(null)
    const {id} = useParams()
    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setVanDetails(data.vans))
    }, [])

    if (!vanDetails) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <img src={vanDetails.imageUrl} width={150} />
            <h2>{vanDetails.name}</h2>
            <p>{vanDetails.price}</p>
            <p>{vanDetails.type}</p>
            
        
        </div>

    );
}

export default HostVanDetails;
