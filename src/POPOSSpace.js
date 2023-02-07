import React from "react"

function POPOSSpace(props) {
    const {name, space, image, address} = props
    return (
        <div>
            <img src={`${process.env.PUBLIC_URL}/images/${image}`} width="300" height="300" alt="Hello" />
            <h1>{name} </h1>
            <div>{address}</div>
        </div>
    )
}

export default POPOSSpace