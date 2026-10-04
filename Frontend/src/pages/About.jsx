import about from '@assets/about.avif'
import '@styles/About.css';

function About() {

  return (
    <section id="about">
      <div className="whataboutism">
        <img src={about} alt="Representación cubista del autor" className="selfportrait"></img>
        <div className="whatatext">
          <p>Hola! I’m Iago, a Story Artist and Visual Storyteller.</p> 
          <p>
            Graduated with a Bachelor in Animated Filmmaking and a Master in Visual Storytelling at Gobelins Paris, I believe 
            there is nothing more powerful than a meaningful story. Fascinated by drawing and animation since I am a kid, telling 
            stories has always been a necessity for me.
          </p> 
          <p>I often fight with a Demon and I made a film about it.</p>
        </div>
      </div>
    </section>
  )
}

export default About