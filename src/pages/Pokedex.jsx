import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FormPoke from '../components/Pokedex/FormPoke'
import PokeContainer from '../components/Pokedex/PokeContainer'
import './pokedex.css'

const Pokedex = () => {

  const urlBase = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0.'

  const [formUrl, setFormUrl] = useState(urlBase)

    const {trainerName} = useSelector(state => state)

  return (
    <div className='pokedex__main'>
      <header className='header'>
      <img className='banner1' src="../img/image 11.png" alt="" />
        <div className='halfHeader'>
          
            <img className='pokeLogo1' src="../img/poke.png" alt="" />
          
        </div>
      </header>
        
    <p className='welcome__p'><span className='welcome'>Welcome {trainerName},</span> here you can find your favourite pokemon.</p>
    <FormPoke urlBase={urlBase} setFormUrl={setFormUrl}/>
    <PokeContainer formUrl={formUrl}/>
    </div>
  )
}

export default Pokedex