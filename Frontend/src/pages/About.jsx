import about from '@assets/about.jpg'
import '@styles/About.css';

function About() {

  return (
    <section id="about">
      <img src={about} alt="Representación cubista del autor"></img>
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum adipisci, corporis temporibus aspernatur numquam, 
          asperiores ipsum, voluptates eaque blanditiis iure perferendis quo eligendi. Ab, aut! Quis tempore eveniet accusantium 
          consequatur.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum adipisci, corporis temporibus aspernatur numquam, 
          asperiores ipsum, voluptates eaque blanditiis iure perferendis quo eligendi. Ab, aut! Quis tempore eveniet accusantium 
          consequatur.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum adipisci, corporis temporibus aspernatur numquam, 
          asperiores ipsum, voluptates eaque blanditiis iure perferendis quo eligendi. Ab, aut! Quis tempore eveniet accusantium 
          consequatur.
        </p>
      </div>
    </section>
  )
}

export default About