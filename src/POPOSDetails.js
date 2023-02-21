import React from 'react'
import { useParams } from 'react-router'
import data from './sfpopos-data.js'
import POPOSFeatureList from './POPOSFeatureList'

function POPOSDetails(props) {
  const params = useParams()
  const { id } = params // Location index
  const { images, title, desc, hours, features, geo } = data[id]

  return (
    <div>
      <div>
        <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} alt={title} />
      </div>

      <div>
        <h1>{ title }</h1>
        <p>{ desc }</p>
        <p>{ hours }</p>
        <POPOSFeatureList features={features}/>
        <p>{ geo.lat } { geo.lon }</p>
      </div>

    </div>
  )
}

export default POPOSDetails