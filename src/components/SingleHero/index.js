import React from 'react'
import './index.css'
import Loading from '../Loading'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import axios from 'axios'
import QuadrinhoIcon from '../../assets/ic_quadrinhos.svg'
import MoviesIcon from '../../assets/ic_trailer.svg'
import RatingIcons from '../../assets/avaliacao_on.svg'
import Comics from '../Comics'
import params from '../../utils/apiConnectionParams'
import logoMenor from '../../assets/logo_menor.svg'
import SearchForm from '../SearchForm'
import EmptyHeartIcon from '../../assets/favorito_02.svg'
import FilledHeartIcon from '../../assets/favorito_01.svg'
import { useGlobalContext } from '../../context'

export default function SingleHero() {
  const { setSearchTerm, removeFavorite, addFavorite, favorites } =
    useGlobalContext()
  const { id } = useParams()
  const [loading, setLoading] = React.useState(false)
  const [hero, setHero] = React.useState(null)

  React.useEffect(() => {
    setSearchTerm('')
    const url = `https://gateway.marvel.com/v1/public/characters/${id}`
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
  }, [setSearchTerm, id])
  if (loading) {
    return <Loading />
  }
  if (!hero) {
    return <h2 className='section-title'>Não há herói para exibir</h2>
  } else {
    const { name, description, image, comics } = hero

    return (
      <div className='singleHero-container'>
        <header className='singleHero-header'>
          <Link to='/'>
            <img src={logoMenor} alt='' className='logo-menor' />
          </Link>
          <SearchForm />
        </header>
        <section className='hero-section'>
          <div className='hero-info-wrapper'>
            <div className='info-title'>
              <h3>{name}</h3>
              <img
                src={
                  favorites.find((item) => item.id === Number(id))
                    ? FilledHeartIcon
                    : EmptyHeartIcon
                }
                alt={
                  favorites.find((item) => item.id === Number(id))
                    ? 'icone favorito'
                    : 'ícone não-favorito'
                }
                className='favorite-icon'
                id={id}
                name={name}
                onClick={
                  favorites.find((item) => item.id === Number(id))
                    ? removeFavorite
                    : addFavorite
                }
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
          <div className='portrait-wrapper'>
            <img
              src={image}
              alt={name}
              className='hero-portrait'
              id={`${id}portrait`}
            />
          </div>
          <Comics
            url={`https${comics.collectionURI.slice(
              4,
              comics.collectionURI.length
            )}`}
          />
        </section>
      </div>
    )
  }
}
