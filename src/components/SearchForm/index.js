import React from 'react'
import './index.css'
import { useGlobalContext } from '../../context'
import SearchIcon from '../../assets/ic_busca_menor.svg'
export default function SearchFrom() {
  const { setSearchTerm, searchTerm } = useGlobalContext()
  const searchValue = React.useRef('')

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  function searchHero() {
    setSearchTerm(searchValue.current.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <>
      <div className='search-container'>
        <img src={SearchIcon} alt='ícone de busca' />
        <form onSubmit={handleSubmit} className='search-form'>
          <input
            type='text'
            placeholder='Procure por heróis'
            name='name'
            id='name'
            ref={searchValue}
            onChange={searchHero}
            value={searchTerm}
          ></input>
        </form>
      </div>
    </>
  )
}
