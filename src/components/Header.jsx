import React from 'react'

const Header = ({handleClick}) => {
  return (
    <div>
        <header className='header'>
                <img onClick={handleClick} className='banner1 banner__click' src="../img/image 11.png" alt="" />
                <div className='halfHeader'>
                    <div className='logo1__container'>
                        <img className='pokeLogo1' src="../img/poke.png" alt="" />
                    </div>
                </div>
            </header>
    </div>
  )
}

export default Header