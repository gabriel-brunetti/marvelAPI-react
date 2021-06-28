import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import EmptyHeartIcon from '../../assets/favorito_02.svg'
import FilledHeartIcon from '../../assets/favorito_01.svg'
import { useGlobalContext } from '../../context'

const Hero = function ({ id, name, image }) {
  const { removeFavorite, addFavorite, favorites } = useGlobalContext()

  return (
    <Link to={`/hero/${id}`}>
      <article className='hero-container'>
        <img src={image} alt={name} id={`${id}portrait`} />
        <div className='info-wrapper'>
          <span>{name}</span>
          <img
            src={
              favorites.find((item) => item.id === id)
                ? FilledHeartIcon
                : EmptyHeartIcon
            }
            alt={
              favorites.find((item) => item.id === id)
                ? 'icone favorito'
                : 'ícone não-favorito'
            }
            className='favorite-icon'
            id={id}
            name={name}
            onClick={
              favorites.find((item) => item.id === id)
                ? removeFavorite
                : addFavorite
            }
          />
        </div>
      </article>
    </Link>
  )
}

export default Hero
