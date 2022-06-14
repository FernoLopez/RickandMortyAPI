import React, { useEffect, useState } from 'react'
import axios from 'axios'
import useResident from '../Hooks/useResident'

const ResidentInfo = ({resident}) => {

   const character = useResident(resident)
    
  return (
    <div>
    <div className='card'>
        <img src={character?.image} alt=''/>
            <h3>{character?.name}</h3>
            <ul>
            <li>Status: {character?.status}</li>
            <li>Origin: {character?.origin.name}</li> 
            <li>Episodes: {character?.episode.length}</li>
            </ul>
        </div>
    </div>
  )
}

export default ResidentInfo