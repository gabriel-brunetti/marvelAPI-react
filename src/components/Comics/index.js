import React, { useState } from 'react'
import './index.css'
import axios from 'axios'
import paramsDefault from '../../utils/apiConnectionParams'
import Loading from '../Loading'

export default function Comics({ url }) {
  const [comics, setComics] = useState([])
  const [loading, setLoading] = useState([])

  React.useEffect(() => {
    let params = { orderBy: 'onsaleDate', ...paramsDefault }
    setLoading(true)
    async function fetchComic() {
      try {
        const response = await axios.get(url, {
          params,
        })
        const data = response.data.data.results
        if (data) {
          const newComic = data.map((item) => {
            const { id, title, thumbnail } = item

            return {
              id,
              title,
              image: `${thumbnail.path}/portrait_xlarge.${thumbnail.extension}`,
            }
          })
          setComics(newComic)
          setLoading(false)
        } else {
          setComics(null)
          setLoading(false)
        }
      } catch (error) {
        console.log(error)
        setLoading(false)
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
      <div className='last-releases'>
        <h4>Últimos lançamentos</h4>
        <div className='comics-grid'>
          {comics.slice(0, 10).map((comic) => {
            return (
              <article key={comic.id} className='comics'>
                <img
                  src={comic.image}
                  alt={comic.title}
                  className='comic-cover'
                />
                <span>{comic.title}</span>
              </article>
            )
          })}
        </div>
      </div>
    </>
  )
}
