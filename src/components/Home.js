import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Home = (props) => {

  const [apiResponse, setApiResponse] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`)
      setApiResponse(response.data)
    }
    fetchData()
  }, [])
  
  return (
    <div>
      <ul>
        {
          Object.keys(apiResponse).length > 0 ?
            apiResponse.results.map((pokemon, index) => {
              return(
                <li key={index} onClick={() => {
                  props.fetch(pokemon.url)
                }}>{pokemon.name}</li>
              )
            })
          : null
        }
      </ul>
    </div>
  )
}

export default Home