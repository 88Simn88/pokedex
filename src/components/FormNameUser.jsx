import React, { useRef } from 'react'
import { setTrainerName } from '../store/slices/trainerName.slice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './formNameUser.css'

const FormNameUser = () => {



const inputName = useRef()

const dispatch = useDispatch()

const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
       dispatch(setTrainerName(inputName.current.value.trim()))
       navigate('/pokedex')
        
    }



  return (
    
        <form onSubmit={handleSubmit}>
            <input placeholder='Your name...' className='pokeInput' ref={inputName} type="text" />
            <button className='pokeBtn'>Start</button>
        </form>
    
  )
}

export default FormNameUser