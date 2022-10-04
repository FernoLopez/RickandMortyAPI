import React from "react"

const InputCharacter = ({setSearchLocation}) => {
  
const searchLocation = e => {
    e.preventDefault()
    setSearchLocation(e.target.firstChild.value)
  }
    
  return (
    <form className="input_style" onSubmit={searchLocation}>
        <input type="text" placeholder="type a location id" />
        <input type="submit" value="Submit" />
    </form> 
  )
}

export default InputCharacter