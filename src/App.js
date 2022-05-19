import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Header from './components/Header'
import { useState } from 'react';
import axios from 'axios';
import Pokemon from './components/Pokemon'

function App() {
  const [currentPokemon, setCurrentPokemon] = useState({});
  const [pokeToShow, setPokeToShow] = useState('')

  const fetchIndividualData = async () => {
    const response = await axios.get(pokeToShow)
    setCurrentPokemon(response.data)
  }

  return (
    <div className="App">
      <Header />
      <Routes>

        <Route path="/" element={<Home fetch={fetchIndividualData} setPoke={setPokeToShow}/>} />
        <Route path="/pokemon" element={<Pokemon current={currentPokemon} />} />

      </Routes>
    </div>
  );
}

export default App;