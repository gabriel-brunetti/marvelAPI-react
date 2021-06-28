import React, { useState } from 'react'
import './index.css'
import axios from 'axios'
import params from '../../utils/apiConnectionParams'
import Loading from '../Loading'

export default function Comics({ url }) {
  const [comic, setComic] = useState([])
  const [loading, setLoading] = useState([])

  React.useEffect(() => {
    setLoading(true)
    async function fetchComic() {
      try {
        const response = await axios.get(url, {
          params,
        })
        const data = response.data.data.results
        if (data) {
          const { id, title, thumbnail } = data[0]

          const comic = {
            id,
            title,
            image: `${thumbnail.path}/portrait_xlarge.${thumbnail.extension}`,
          }
          setComic(comic)
        } else {
          setComic(null)
        }
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    fetchComic()
  }, [url])
  if (loading) {
    return <Loading />
  }

  return (
    <>
      <img src={comic.image} alt={comic.title} className='comic-cover' />
      <span>{comic.title}</span>
    </>
  )
}
