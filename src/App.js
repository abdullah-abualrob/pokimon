import React, { useState, useEffect } from 'react'
import axios from 'axios';
import PokCard from './components/common/PokCard/PokCard';

import './App.css';

function App() {
  const [pokemonsData, setPokemonsData] = useState([]);

  const getData = async() => {
    let pokiList = [];
    await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
      .then((response) => {
        const pokemons = response.data.results;
        pokemons.map((pokemon) => {
          pokiList.push({name: pokemon.name, url: pokemon.url});
        });
      })
      .catch((error) => { });
      setPokemonsData(pokiList);
  }

  useEffect(() => {
    getData();
  },[]);
  
  return (
    <div className='App'>
      <div className='container'>
        {pokemonsData.map((pok , index) => {
          // console.log(pok);
          return(
            <PokCard key={index} index = {index+1} name = {pok.name} url={pok.url}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;