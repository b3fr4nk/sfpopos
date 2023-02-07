import React from "react"
import POPOSSpace from "./POPOSSpace"
import './POPOSList.css'
import data from './sfpopos-data.json'

function POPOSList() {
    const titles = data.map((obj) => {
        const {title, address, images, hours} = obj

        return (
            <POPOSSpace key={title} name={title} address={address} image={images[0]} hours={hours} />
        )
    })

    return (
        <div className="POPOSList">
            {titles}
        </div>
    )
}

export default POPOSList