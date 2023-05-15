import React from 'react'
import FormNameUser from '../components/FormNameUser'
import './home.css'

const Home = () => {
  return (
    
    <div className='pokeHome'>
      <img className='banner' src="../img/image 11.png" alt="" />
      <h2 className='title'>Hi Trainer!</h2>
      <p className='paragraph'>Please give us your trainer name to start</p>
      <FormNameUser />
      <footer className='footer'>
        <div className='halfFooter'>
          
            <img className='pokeLogo' src="../img/poke.png" alt="" />
          
        </div>
      </footer>
    </div>
    
  )
}

export default Home