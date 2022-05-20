import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './Home.css'

const Home = (props) => {

  const [apiResponse, setApiResponse] = useState({})
  const [paginationStuff, setPaginationStuff] = useState ({
    limit: 50,
    offset: 0
  })

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${paginationStuff.limit}&offset=${paginationStuff.offset}`)
      setApiResponse(response.data)
    }
    fetchData()
  }, [paginationStuff])
  
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
      <div className='container'>
      
      <div className="pagination" onClick={() => {
          if (paginationStuff.offset !== 0) {
            setPaginationStuff({
              limit: paginationStuff.limit,
              offset: paginationStuff.offset - paginationStuff.limit
            })
          }

        }}>
          ◄
        </div>
       
        <div className='pagination' onClick={()=>{
          setPaginationStuff({ 
            limit: paginationStuff.limit,
            offset: paginationStuff.limit + paginationStuff.offset})
        }}>►
        </div>
      
      </div>
      
      
      </div>
  )
}

export default Home
