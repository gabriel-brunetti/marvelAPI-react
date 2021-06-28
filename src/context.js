import React, { useState, useContext, useCallback, useEffect } from 'react'
import axios from 'axios'
import paramsDefault from './utils/apiConnectionParams'

const url = 'http://gateway.marvel.com/v1/public/characters'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [heroes, setHeroes] = useState([])
  const [alphabeticOrder, setAlphabeticOrder] = useState(true)

  let params = {
    ...(searchTerm
      ? { nameStartsWith: searchTerm, ...paramsDefault }
      : { ...paramsDefault }),
  }

  params = {
    ...(alphabeticOrder ? { ...params } : { orderBy: '-name', ...params }),
  }

  const fetchHeroes = useCallback(async () => {
    setLoading(true)
    try {
      const response = await axios.get(url, {
        params: params,
      })
      const data = response.data.data.results
      if (data) {
        const newHero = data.map((item) => {
          const { name, thumbnail, id, resourceURI } = item

          return {
            id,
            name,
            image: `${thumbnail.path}/standard_fantastic.${thumbnail.extension}`,
            resourceURI,
          }
        })
        setHeroes(newHero)
      } else {
        setHeroes([])
      }
      setLoading(false)
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }, [searchTerm, alphabeticOrder])

  useEffect(() => {
    fetchHeroes()
  }, [searchTerm, fetchHeroes])

  return (
    <AppContext.Provider
      value={{
        loading,
        heroes,
        setSearchTerm,
        searchTerm,
        setAlphabeticOrder,
        alphabeticOrder,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
