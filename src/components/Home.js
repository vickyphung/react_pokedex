import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './Home.css'

const Home = (props) => {

  const [apiResponse, setApiResponse] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=500&offset=0`)
      setApiResponse(response.data)
    }
    fetchData()
  }, [])
  
  return (
    <div className='pokeIndex'>
  
      <ul className='wrap'>
        {
          Object.keys(apiResponse).length > 0 ?
            apiResponse.results.map((pokemon, index) => {
              return(
                <li key={index} className="pokeList" onClick={() => {
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