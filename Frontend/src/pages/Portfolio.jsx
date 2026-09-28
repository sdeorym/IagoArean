import { useData } from "../context/DataContext";
import { Link } from 'react-router-dom';
import Gate from "@components/Gate";
import '@styles/Portfolio.css';

function Portfolio() {
  const { data, error } = useData()

  //console.log("render, isSelected es:", isSelected); 
  const projSum = data?.map((proj) => ({
      id: proj.id,
      title: proj.title,
      slug: proj.slug,
      image: proj.image,
      alt: proj.alt,
      contents: proj.contents,
    })) ?? [];

/*
    <div key={i.id}>
            <h3>{i.title}</h3>
            <p>{i.motive}, {i.year}</p>
            <div className="gallery">
              {i.contents?.map((j) =>
                (j.video != true) ?
                  <Gallery key={j.id} src={j.src} alt={j.description} onClick={() => { setIsSelected(j); console.log(isSelected);}} /> :
                  <Videt key={j.id} src={j.src} />
*/ 

  return (
    <section id="portfolio">
      <div className="gateway">   
        {projSum.map((i) =>
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