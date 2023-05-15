import React from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import './errorMessage.css'
import { useSelector } from 'react-redux'

const ErrorMessage = () => {

    const navigate = useNavigate()

    const {trainerName} = useSelector(state => state)

    const handleBack = () => {
        navigate('/pokedex')
    }

  return (
    <div>

        <Header />
        <h2 className='error__title'><span className='name__pokeUser'>{trainerName}</span>, this pokemon does not exist...</h2>
        <div className='error__imgContainer'>
        <img src="https://i.kym-cdn.com/photos/images/original/000/837/731/fb4.jpg" alt="" />
        </div>
        <h2 className='error__subtitle'>Please, select a valid name or id</h2>
        <button className='backPokedex__btn' onClick={handleBack}>Back</button>
        
        
    </div>
  )
}

export default ErrorMessage