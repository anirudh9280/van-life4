import React from 'react';
import {Link} from "react-router-dom"

const HandleError = () => {
    return (
        <div className="not-found-container">
            <h1>Sorry, the page you were looking for was not found.</h1>
            <Link className="link-button" to="/">Back to home</Link>
            
        </div>
    );
}

export default HandleError;
