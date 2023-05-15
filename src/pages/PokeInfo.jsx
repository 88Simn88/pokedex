import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import PokeIdPage from './PokeIdPage'
import ErrorMessage from './ErrorMessage'

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
        <ErrorMessage />
        
        : <>
        
        <PokeIdPage pokemon={pokemon} />
        </>
      }

        
        </div>
  )
}

export default PokeInfo