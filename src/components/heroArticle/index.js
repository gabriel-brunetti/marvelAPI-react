import Portrait from '../../assets/standard_medium.jpg'
import FavIcon02 from '../../assets/favorito_02.svg'

const HeroArticle = function () {
  return (
    <article>
      <div className='hero-container'>
        <img src={Portrait} alt='Sr. Fantástico' />
        <div className='info-wrapper'>
          <span>Sr. Fantástico</span>
          <img src={FavIcon02} alt='ícone não-favorito' />
        </div>
      </div>
    </article>
  )
}

export default HeroArticle
