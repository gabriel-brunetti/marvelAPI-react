import React from 'react'
import './index.css'
import HeroIcon from '../../assets/ic_heroi.svg'
import FavIcon01 from '../../assets/favorito_01.svg'
import HeroArticle from '../heroArticle'

const Heroes = function () {
  return (
    <>
      <main>
        <div className='params-wrapper'>
          <span>Encontrados 20 heróis</span>
          <div className='params-order'>
            <img src={HeroIcon} alt='ícone herói' className='hero-icon' />
            <label htmlFor='orderByName' className='order-label'>
              Ordernar por nome - A/Z
            </label>
            <input
              type='checkbox'
              name='orderByName'
              id='orderByName'
              className='order-input'
            />
            <img src={FavIcon01} alt='ícone favorito' className='fav-icon' />
            <span className='fav-label'>Somente favoritos</span>
          </div>
        </div>
        <div className='heroes-container'>
          <HeroArticle />
        </div>
      </main>
    </>
  )
}

export default Heroes
