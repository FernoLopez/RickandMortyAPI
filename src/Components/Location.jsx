import React from 'react'

const Location = ({location}) => {
  return (
    <article>
        <h2>{location?.name}</h2>
        <div className='info'>
        <h3><span>Type: </span> {location?.type}</h3>
        <h4><span>Dimension: </span> {location?.dimension}</h4>
        <h5><span>Population: </span>{location?.residents.length}</h5>
        </div>
    </article>
    
          
          
        
     
  )
}

export default Location