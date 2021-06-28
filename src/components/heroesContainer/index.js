import React, { useEffect, useState } from 'react'
import './index.css'
import HeroIcon from '../../assets/ic_heroi.svg'
import FavIcon01 from '../../assets/favorito_01.svg'
import FavIcon02 from '../../assets/favorito_02.svg'
import Hero from '../Hero'
import Loading from '../Loading'
import { useGlobalContext } from '../../context'
import params from '../../utils/apiConnectionParams'

export default function HeroesContainer() {
  const { heroes, loading, setAlphabeticOrder, alphabeticOrder } =
    useGlobalContext()

  const handleAlphabeticOrder = () => {
    if (alphabeticOrder === true) {
      params = { orderBy: '-name', ...params }
      setAlphabeticOrder(false)
    } else if (alphabeticOrder === false) {
      params = { orderBy: 'name', ...params }
      setAlphabeticOrder(true)
    }
  }

  if (loading) {
    return <Loading />
  }
  if (heroes.length < 1) {
    return <h2 className='section-title'>nenhum herói foi encontrado</h2>
  }
  return (
    <>
      <main>
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
            <img src={FavIcon01} alt='ícone favorito' className='fav-icon' />
            <span className='fav-label'>Somente favoritos</span>
          </div>
        </div>
        <div className='heroes-container'>
          {heroes.map((hero) => {
            return <Hero key={hero.id} {...hero} />
          })}
        </div>
      </main>
    </>
  )
}
