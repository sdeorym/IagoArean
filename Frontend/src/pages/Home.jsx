import Hero from '@assets/colombina.jpg'
import '@styles/Hero.css';

function Home() {

  return (
    <section id="hero">
        <img src={Hero} alt="Puerto de Ragusa" className="heroPhoto"></img>
    </section>
  )
}

export default Home