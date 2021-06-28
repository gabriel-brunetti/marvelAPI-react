import React from 'react'
import './index.css'
import MarvelIcon from '../../assets/logo.svg'
import SearchForm from '../SearchForm'
import HeroIcon from '../../assets/ic_heroi.svg'
import filledHeart from '../../assets/favorito_01.svg'
import emptyHeart from '../../assets/favorito_02.svg'
import { useGlobalContext } from '../../context'

const Header = () => {
  const {
    alphabeticOrder,
    setAlphabeticOrder,
    heroes,
    setOnlyFavorites,
    onlyFavorites,
  } = useGlobalContext()

  const handleAlphabeticOrder = (e) => {
    if (alphabeticOrder === true) {
      e.checked = true
      setAlphabeticOrder(false)
    } else if (alphabeticOrder === false) {
      e.checked = false
      setAlphabeticOrder(true)
    }
  }
  const handleFavorite = (e) => {
    if (onlyFavorites === false) {
      setOnlyFavorites(true)
    } else if (onlyFavorites === true) {
      setOnlyFavorites(false)
    }
  }

  return (
    <>
      <section className='header'>
        <img src={MarvelIcon} alt='Marvel search heros' />
        <h3>Explore o Universo</h3>
        <p>
          Mergulhe no domínio deslumbrante de todos os personagens clássicos que
          você ama - e aqueles que você descobrirá em breve!
        </p>
        <SearchForm />
      </section>
      <div className='params-wrapper'>
        <span>{`Encontrados ${heroes.length} heróis`}</span>
        <div className='params-order'>
          <img src={HeroIcon} alt='ícone herói' className='hero-icon' />
          <span> Ordernar por nome - A/Z</span>
          <label htmlFor='orderByName' className='order-label switch'>
            <input
              type='checkbox'
              name='orderByName'
              id='orderByName'
              className='order-input'
              onChange={handleAlphabeticOrder}
            />
            <span className='slider round'></span>
          </label>
          <img
            src={onlyFavorites ? filledHeart : emptyHeart}
            alt='ícone favorito'
            className='fav-icon'
            onClick={handleFavorite}
          />
          <span className='fav-label'>Somente favoritos</span>
        </div>
      </div>
    </>
  )
}

export default Header
