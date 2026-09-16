import about from '@assets/about.jpg'
import '@styles/About.css';

function About() {

  return (
    <section id="about">
      <img src={about} alt="Representación cubista del autor"></img>
      <div>
        <p>Hola! I’m Iago, a Story Artist and Visual Storyteller.</p> 
        <p>
          Graduated with a Bachelor in Animated Filmmaking and a Master in Visual Storytelling at Gobelins Paris, I believe 
          there is nothing more powerful than a meaningful story. Fascinated by drawing and animation since I am a kid, telling 
          stories has always been a necessity for me.
        </p> 
        <p>I often fight with a Demon and I made a film about it.</p>
      </div>
    </section>
  )
}

export default About