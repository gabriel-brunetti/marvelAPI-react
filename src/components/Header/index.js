import React from 'react'
import SearchIcon from '../../assets/ic_busca_menor.svg'
import MarvelIcon from '../../assets/logo.svg'
import './index.css'

const Header = () => {
  return (
    <>
      <section className='header'>
        <img src={MarvelIcon} alt='Marvel search heros' />
        <h3>Explore o Universo</h3>
        <p>
          Mergulhe no domínio deslumbrante de todos os personagens clássicos que
          você ama - e aqueles que você descobrirá em breve!
        </p>
        <div className='search-container'>
          <img src={SearchIcon} alt='ícone de busca' />
          <input type='text' placeholder='Procure por heróis'></input>
        </div>
      </section>
    </>
  )
}

export default Header
