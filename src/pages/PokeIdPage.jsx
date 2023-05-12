import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import './pokeIdPage.css'
import { useNavigate } from 'react-router-dom';


const PokeIdPage = ({ pokemon }) => {

    console.log(pokemon)

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/pokedex')
    }

    return (
        <>
            <header className='header'>
                <img onClick={handleClick} className='banner1 banner__click' src="../img/image 11.png" alt="" />
                <div className='halfHeader'>

                    <img className='pokeLogo1' src="../img/poke.png" alt="" />

                </div>
            </header>

             <div className="middle"></div> 

        <div className='big__container'>

            <div className="pokemon__info__container">
                
                <article
                    
                    className={`poke__info border-${pokemon?.types[0].type.name}`}
                >
                    <img
                        className="pokemon__info__sprite"
                        src={pokemon?.sprites.other["official-artwork"].front_default}
                        alt=""
                    />
                    
                    <header
                        className={`pokemon__info__header bg-${pokemon?.types[0].type.name}`}
                    ></header>
                    
                    <section className="pokemon__info__body">
                    <h3 className={`poke__number color-${pokemon?.types[0].type.name}`}>#{pokemon?.id}</h3>
                        <div className="pokemon__info__br">
                        
                            <hr className="pokemon__info__hr" />
                          
                            <h3
                                className={`pokemon__info__name color-${pokemon?.types[0].type.name}`}
                            >
                                {pokemon?.name}
                            </h3>
                            <hr className="pokemon__info__hr" />
                        </div>
                        <ul className="pokemon__info__ul">
                            <li className="pokemon__adj">height</li>
                            <li className="pokemon__adj">weight</li>
                            <span className="pokemon__span">{pokemon?.height}</span>
                            <span className="pokemon__span">{pokemon?.weight}</span>
                        </ul>
                        <div className="pokemon__info__uls">
                            <div>
                                <h3 className={`pokemon__info__span__li color-${pokemon?.types[0].type.name}`}>Type</h3>
                                <ul className="pokemon__info__types">
                                    {pokemon?.types.map((objType) => (
                                        <li
                                            className="pokemon__info__type-specific"
                                            key={objType.type.url}
                                        >
                                            {objType.type.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className={`pokemon__info__span__li color-${pokemon?.types[0].type.name}`}>Hability</h3>
                                <ul className="pokemon__info__hab">
                                    {pokemon?.abilities.map((objType) => (
                                        <li
                                            className="pokemon__info__hab__li"
                                            key={objType.ability.url}
                                        >
                                            {objType.ability.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <h3 className={`stats__title color-${pokemon?.types[0].type.name}`}>Stats</h3>
                        <ul className="pokemon__info__stats">
                           
                            {pokemon?.stats.map((objStat) => (
                                <li
                                    className="pokemon__info__stats-specific"
                                    key={objStat.stat.url}
                                >
                                    <div className="pokemon__info__container2">
                                        <span className="pokemon__info__stats-label">
                                            {objStat.stat.name}
                                        </span>
                                        <span className="pokemon__info__stats-label">{objStat.base_stat} /150</span>
                                    </div>
                                    <ProgressBar
                                        completed={objStat.base_stat} 
                                        className='wrapper'
                                        barContainerClassName="container"
                                        
                                        
                                        maxCompleted={150}
                                    />
                                    <span
                                        className={`pokemon__info__stats-value color-${pokemon?.types[0].type.name}`}
                                    ></span>
                                </li>
                            ))}
                        </ul>
                    </section>
                </article>
                
            </div>
 
            <article className='allMoves'>
                    <h3 className={`moves__title color-${pokemon?.types[0].type.name}`}>Moves</h3>
                    <ul className='moves__container'>
                    {
                        pokemon?.moves.map(move => (
                            <li key={move.move.url}>
                                <div className={`move__card bg-${pokemon?.types[0].type.name}`}>{move.move.name}</div>
                                </li> 
                        ))
                    }
                    </ul>
                </article>
            </div>
        </>

    )
}

export default PokeIdPage