import React from "react"
import "./POPOSSpace.css"
import { Link } from 'react-router-dom'

function POPOSSpace(props) {
    const {name, image, address, hours, id} = props
    return (
        <div>
            <Link to={`/details/${id}`}>
                <img src={`${process.env.PUBLIC_URL}/images/${image}`} width="300" height="300" alt="Hello" />
            </Link>
            <Link to={`/details/${id}`}>
                <h1>{name} </h1>
            </Link>
            <div>{address}</div>
            <div className="POPOSSpace--hours">{hours}</div>
        </div>
    )
}

export default POPOSSpace