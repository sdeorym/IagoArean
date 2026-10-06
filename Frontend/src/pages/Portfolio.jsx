import { useData } from "../context/DataContext";
import { Link } from 'react-router-dom';
import Gate from "@components/Gate";
import '@styles/Portfolio.css';

function Portfolio() {
  const { data, error } = useData()

  const projSum = data?.map((proj) => ({
      id: proj.id,
      title: proj.title,
      slug: proj.slug,
      image: proj.image,
      alt: proj.alt,
      projects: proj.projects,
      contents: proj.contents,
    })) ?? [];
    console.log("hola, estoy en portfolio y data es", data);

  return (
    <section id="portfolio">
      <div className="gateway">   
        {projSum?.map((i) =>
          <div key={i.id}>
            <Link to={`${i.slug}`} className="myLink" >
              <Gate title={i.title} src={i.image} alt= {i.alt} />
            </Link>
          </div>
        )}            
      </div>

    </section>
  )
}

export default Portfolio