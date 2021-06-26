import React, { useState, useContext, useCallback, useEffect } from 'react'
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
import axios from 'axios'

const url = 'http://gateway.marvel.com/v1/public/characters'
const publicKey = 'cbea2d04c5782aaafc323023acea74dd'
const privateKey = 'ced775d6630c717b4fd6df6633c88184ea89e66b'
const timestamp = Number(new Date())
const hash = md5(timestamp + privateKey + publicKey)

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('a')
  const [heroes, setHeroes] = useState([])

  const fetchHeroes = useCallback(async () => {
    setLoading(true)
    try {
      const response = await axios.get(url, {
        params: { ts: timestamp, apikey: publicKey, hash: hash },
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
  }, [])

  useEffect(() => {
    fetchHeroes()
  }, [fetchHeroes])

  return (
    <AppContext.Provider value={{ loading, heroes, searchTerm }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
