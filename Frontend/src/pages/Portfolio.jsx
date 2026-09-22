import { useData } from "../context/DataContext";
import Gallery from "@components/Gallery";
import Videt from "@components/Videt";
import '@styles/Portfolio.css';

function Portfolio() {
  const { data, error } = useData()
  const projSum = data?.map((proj) => ({
      id: proj.id,
      title: proj.title,
      motive: proj.motive,
      year: proj.year,
      contents: proj.contents,
    })) ?? [];

  return (
    <section id="portfolio">   
      {projSum.map((i) =>
        <div key={i.id}>
          <h3>{i.title}</h3>
          <p>{i.motive}, {i.year}</p>
          <div className="gallery">
            {i.contents?.map((j) =>
              (j.video != true) ?
                <Gallery key={j.id} src={j.src} alt={j.description} /> :
                <Videt key={j.id} src={j.src} />
              )}
          </div>
        </div>)}

    </section>
  )
}

export default Portfolio