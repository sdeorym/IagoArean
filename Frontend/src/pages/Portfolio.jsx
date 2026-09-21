import { useData } from "../context/DataContext";
import Gallery from "@components/Gallery";
/*import Zaza from '@projects/Zaza';
import Sweet from '@projects/Sweet';
import Artist from '@projects/Artist';
import Memoires from '@projects/Memoires';
import Demon from '@projects/Demon';*/
import '@styles/Portfolio.css';

function Portfolio() {
  const { data, error } = useData()

  const titulin = new Set(data?.map((i) => i.title));
  const datos = data;
  console.log("datos:", datos[0]);
  const content = new Set(data?.map((i) => i.contents[0].src));
  const titulos = [...titulin];
  const cont = [...content];
  //console.log(cont);

  return (
    <section id="portfolio">   
      {titulos.map((i) =>
        <div key={i}>
          <h3>{i}</h3>
        </div>)}
    </section>
  )
}

export default Portfolio