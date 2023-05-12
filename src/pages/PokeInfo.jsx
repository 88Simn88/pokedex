import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import PokeIdPage from './PokeIdPage'

const PokeInfo = () => {

    const { name }= useParams()

    const url = `https://pokeapi.co/api/v2/pokemon/${name}`

    const [pokemon, getPokemonByName, hasError] = useFetch(url)

    useEffect(() => {
        getPokemonByName()
    },[name])

  return (
    <div>

      {
        hasError
        ?
        <h1>This pokemon does not exist x</h1>
        
        : <>
        
        <PokeIdPage pokemon={pokemon} />
        </>
      }

        
        </div>
  )
}

export default PokeInfo