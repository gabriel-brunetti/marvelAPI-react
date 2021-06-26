import React, { useEffect } from 'react'
import './index.css'
import HeroIcon from '../../assets/ic_heroi.svg'
import FavIcon01 from '../../assets/favorito_01.svg'
import Hero from '../Hero'
import Loading from '../Loading'
import { useGlobalContext } from '../../context'

export default function HeroesContainer() {
  const { heroes, loading } = useGlobalContext()
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
          {heroes.map((hero) => {
            return <Hero key={hero.id} {...hero} />
          })}
        </div>
      </main>
    </>
  )
}
