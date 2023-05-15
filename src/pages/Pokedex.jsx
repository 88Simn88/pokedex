import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FormPoke from '../components/Pokedex/FormPoke'
import PokeContainer from '../components/Pokedex/PokeContainer'
import './pokedex.css'
import Header from '../components/Header'
import Loader from './Loader'

const Pokedex = () => {

  const urlBase = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0.'

  const [formUrl, setFormUrl] = useState(urlBase)

  const { trainerName } = useSelector(state => state)

  return (

    <div className='pokedex__main'>
      <Header />

      <p className='welcome__p'><span className='welcome'>Welcome {trainerName},</span> here you can find your favourite pokemon.</p>
      <FormPoke urlBase={urlBase} setFormUrl={setFormUrl} />
      <PokeContainer formUrl={formUrl} />
    </div>



  )
}

export default Pokedex