import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import FavIcon02 from '../../assets/favorito_02.svg'

const HeroArticle = function ({ id, name, image, resourceURI }) {
  return (
    <Link to={`/hero/${id}`}>
      <article className='hero-container'>
        <img src={image} alt={name} />
        <div className='info-wrapper'>
          <span>{name}</span>
          <img
            src={FavIcon02}
            alt='ícone não-favorito'
            className='fav-icon02'
          />
        </div>
      </article>
    </Link>
  )
}

export default HeroArticle
