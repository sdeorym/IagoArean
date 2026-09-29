import HeroL from '@assets/hero.avif'
import HeroMS from '@assets/hero-m-s.avif'
import '@styles/Hero.css';

function Home() {

  return (
    <section id="hero">
      <picture>
        <source media="(max-width: 1024px)" srcSet={HeroMS} />
        <img src={HeroL} alt="Kind of hero" className="heroPhoto" />
      </picture>
    </section>
  )
}

export default Home