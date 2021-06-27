import React from 'react'
import MarvelIcon from '../../assets/logo.svg'
import SearchForm from '../SearchForm'
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
        <SearchForm />
      </section>
    </>
  )
}

export default Header
