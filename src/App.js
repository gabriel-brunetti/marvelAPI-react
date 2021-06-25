import React from 'react'
import {
  AxiosProvider,
  Request,
  Get,
  Delete,
  Head,
  Post,
  Put,
  Patch,
  withAxios,
} from 'react-axios'
import md5 from 'md5'
import { useEffect } from 'react'
import axios from 'axios'
import Heroes from './components/heroesContainer/index'
import SearchIcon from './assets/ic_busca_menor.svg'
import MarvelIcon from './assets/logo.svg'

function App() {
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
      <Heroes />
      <footer></footer>
    </>
  )
}

export default App
