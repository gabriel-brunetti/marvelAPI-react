import React, { useEffect } from 'react'
import './index.css'
import Hero from '../Hero'
import Loading from '../Loading'
import { useGlobalContext } from '../../context'

export default function HeroesContainer() {
  const { heroes, loading, favorites, onlyFavorites } = useGlobalContext()

  useEffect(() => {}, [favorites])

  if (loading) {
    return <Loading />
  }
  if (heroes.length < 1) {
    return <h2 className='section-title'>nenhum herói foi encontrado</h2>
  }
  return (
    <main className='heroes-container'>
      {onlyFavorites ? (
        <>
          {favorites.map((favorite) => {
            return <Hero key={favorite.id} {...favorite} />
          })}
        </>
      ) : (
        <>
          {heroes.map((hero) => {
            return <Hero key={hero.id} {...hero} />
          })}
        </>
      )}
    </main>
  )
}
