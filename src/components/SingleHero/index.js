import React from 'react'
import './index.css'
import Loading from '../Loading'
import { useParams, Link } from 'react-router'
import axios from 'axios'
import md5 from 'md5'
import FavIcon02 from '../../assets/favorito_02.svg'
import QuadrinhoIcon from '../../assets/ic_quadrinhos.svg'
import MoviesIcon from '../../assets/ic_trailer.svg'
import RatingIcons from '../../assets/avaliacao_on.svg'
import Comics from '../Comics'

export default function SingleHero() {
  const { id } = useParams()
  const url = `http://gateway.marvel.com/v1/public/characters/${id}`
  const publicKey = 'cbea2d04c5782aaafc323023acea74dd'
  const privateKey = 'ced775d6630c717b4fd6df6633c88184ea89e66b'
  const timestamp = Number(new Date())
  const hash = md5(timestamp + privateKey + publicKey)
  const params = { ts: timestamp, apikey: publicKey, hash: hash }
  const [loading, setLoading] = React.useState(false)
  const [hero, setHero] = React.useState(null)

  React.useEffect(() => {
    setLoading(true)
    async function fetchHero() {
      try {
        const response = await axios.get(url, {
          params,
        })
        const data = response.data.data.results
        if (data) {
          const { name, description, thumbnail, comics } = data[0]

          const hero = {
            name,
            description,
            image: `${thumbnail.path}/standard_fantastic.${thumbnail.extension}`,
            comics,
          }
          setHero(hero)
        } else {
          setHero(null)
        }
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    fetchHero()
  }, [id])
  if (loading) {
    return <Loading />
  }
  if (!hero) {
    return <h2 className='section-title'>Não há herói para exibir</h2>
  } else {
    const { name, description, image, comics } = hero

    return (
      <section className='hero-section'>
        <div className='info-wrapper'>
          <div className='info-title'>
            <h3>{name}</h3>
            <img
              src={FavIcon02}
              alt='ícone não-favorito'
              className='fav-icon02'
            />
          </div>
          <div className='info'>
            <p className='hero-description'>{description}</p>
            <div className='data-wrapper'>
              <div className='comics-movies'>
                <div className='comics-wrapper'>
                  <span>Quadrinhos</span>
                  <div className='comics-data'>
                    <img src={QuadrinhoIcon} alt='' />
                    <span>{comics.available}</span>
                  </div>
                </div>
                <div className='movies-wrapper'>
                  <span>Filmes</span>
                  <div className='movies-data'>
                    <img src={MoviesIcon} alt='' />
                    <span>3</span>
                  </div>
                </div>
              </div>
              <div className='rating-wrapper'>
                <span>Rating:</span>
                <img src={RatingIcons} alt='' />
              </div>
              <span className='last-comics'>Último quadrinho:</span>
            </div>
          </div>
        </div>
        <img src={image} alt={name} className='hero-portrait' />
        <div className='last-releases'>
          <h4>Últimos lançamentos</h4>
          {/* <Comics url={comics.collectionURI} /> */}
        </div>
      </section>
    )
  }
}
