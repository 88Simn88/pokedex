import React, { useEffect, useRef, } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import './formPoke.css'

const FormPoke = ( {setFormUrl, urlBase}) => {

    const inputPoke = useRef()

    const navigate = useNavigate()

    const url = 'https://pokeapi.co/api/v2/type/'

    const [ types, getAllTypes] = useFetch(url)

    useEffect(() => {
        getAllTypes()
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
      const path = `/pokedex/${inputPoke.current.value.trim().toLowerCase()}`
       navigate(path)
    }

    const handleChange = (e) => {
         setFormUrl(e.target.value)
    }

  return (
    <div>
       <div className='formContainer'>
        <form onSubmit={handleSubmit}>
            <input placeholder='Search a pokemon' className='inputSearch' ref={inputPoke} type="text" />
            <button className='btnSearch'>Search</button>
        </form>
        <select className='selectPoke' onChange={handleChange}>
            
            <option  value={urlBase}>AllPokemons</option>
            {
                types?.results.map(type => (
                    <option 
                    key={type.url}
                    value={type.url}
                    >{type.name}</option>
                ))
            }
        </select>
        </div>
        </div>
  )
}

export default FormPoke