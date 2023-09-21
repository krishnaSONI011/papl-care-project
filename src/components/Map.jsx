import React from 'react'
import { useParams,Link } from 'react-router-dom'
export default function Map() {
    let {param1,param2,param3} = useParams()
  return (
    <div className='text-center w-100'>
        <div className='pb-4'>
            <h3>Location of Vehicle No : {param3}</h3>
        </div>
 <iframe
  title="Location on OpenStreetMap"
  width="600"
  height="450"
  frameBorder="0"
  src={`https://www.openstreetmap.org/export/embed.html?bbox=${param1},${param2}&layer=mapnik`}
  allowFullScreen
></iframe>
<div><Link to="/point-1" ><button className='btn btn-primary'>Back</button></Link></div>
    </div>
  )
}
