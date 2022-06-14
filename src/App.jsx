import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Location from './Components/Location'
import ResidentInfo from './Components/ResidentInfo'
import useLocation from './Hooks/useLocation'
import InputCharacter from './Components/InputCharacter'

function App() {

  const [searchLocation, setSearchLocation] = useState()

  console.log(searchLocation)

  const location = useLocation(searchLocation)

  return (
    <div>
      <div>
      <Location location={location}/>
      </div>
      <InputCharacter setSearchLocation={setSearchLocation}/>
    <div className='Resident'>
      {location?.residents.map(resident => (
        <ResidentInfo
        resident={resident}
        key={resident}
      />
      ))
      }
      </div>
      </div>
  );
}

export default App
