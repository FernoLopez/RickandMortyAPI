import { useState, useEffect } from 'react'
import axios from 'axios'

const useResident = resident => {

    const [character, setCharacter] = useState()

    useEffect(() => {
      axios.get(resident)
        .then(response => setCharacter(response.data))
        .catch(error => console.log(error))
    }, [])

     /* console.log(character)  */

  return character
}

export default useResident