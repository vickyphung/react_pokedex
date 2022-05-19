import React, { useState } from 'react'
import './Pokemon.css'

const Pokemon = ({ current }) => {

  const [typeColors, setTypeColors] = useState({
    normal: 'gray',
    fire: 'orange',
    water: 'blue',
    grass: 'green',
    electric: 'yellow',
    ice: 'lightblue',
    fighting: 'red',
    poison: 'purple',
    ground: 'beige',
    flying: 'violet',
    psychic: 'pink',
    bug: 'limegreen',
    rock: 'beige',
    ghost: 'purple',
    dark: 'darkgray',
    dragon: 'purple',
    steel: 'silver',
    fairy: 'pink'
  })

  const colorCheck = (index) => {
    if (Object.keys(current.types).length > index) {
      return typeColors[current.types[index].type.name]
    } else {
      return null
    }
  }

  const [typeStyle, setTypeStyle] = useState({
    backgroundColor0: typeColors[current.types[0].type.name],
    backgroundColor1: colorCheck(1)
  })

  console.log(current)
  return (
    <div>
      {current.name}
      <p>
        its types are:
        {
          current.types.map((currentType, index) => {
            return (
              <span className="type" style={{ backgroundColor: typeStyle[`backgroundColor${index}`] }}>
                {currentType.type.name}
              </span>
            )
          })
        }
      </p>
    </div>
  )
}

export default Pokemon