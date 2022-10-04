import React, { useEffect, useState } from 'react'
import axios from 'axios'
import useResident from '../Hooks/useResident'
import rymLogo from '../assets/bcc4085e-c311-4886-a7a4-aa58127883d7.5958f8a36f96aa4c08dbc4a8a580e57c.webp'

const ResidentInfo = ({resident}) => {

   const character = useResident(resident)
    
  return (
    <article className='cards_container'>
    <section className='card'>
      <div className="character">
  <img className="charac-profile-img" src={character?.image} alt='' />
  <div className="charac-description-bk"></div>
  <div className="charac-description">
    <p>{character?.name}</p>
  </div>
  <div  className="charac-type">
  <ul>
    <li>Status: {character?.status}</li>
    <li>Origin: {character?.origin.name}</li> 
    <li>Episodes: {character?.episode.length}</li>
  </ul>
  </div>
  <div className="charac-logo">
    <img src={rymLogo} alt=""/> 
  </div>
</div>
    </section>
    </article>
  )
}

export default ResidentInfo