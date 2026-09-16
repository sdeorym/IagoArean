import Zaza from '@projects/Zaza';
import Sweet from '@projects/Sweet';
import Artist from '@projects/Artist';
import Memoires from '@projects/Memoires';
import Demon from '@projects/Demon';
import '@styles/Portfolio.css';

function Portfolio() {

  return (
    <section id="portfolio">   
      <Demon />
      <Memoires />
      <Zaza />
      <Sweet />
      <Artist />
    </section>
  )
}

export default Portfolio