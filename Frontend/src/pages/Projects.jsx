import { useState } from "react"
import { useParams } from "react-router-dom"
import { useData } from "../context/DataContext"
import Gallery from "@components/Gallery"
import Videt from "@components/Videt"
import Modal from "@components/Modal"
import CajaModal from "@components/CajaModal"
import '@styles/Portfolio.css'

function Projects(  ) {
  const [isSelected, setIsSelected] = useState(null);
  const { slug } = useParams();
  const { data } = useData();

  const proyecto = data?.find((p) => p.slug === slug);
  if (!proyecto) {return (<h3>Project not found</h3>)};

  return (
    <section id="project">
      <h3>{proyecto.title}</h3>
      <div className="gallery">
        {proyecto.projects?.map((i) =>
          <div key={i.id}>
          <h4>{i.Name}</h4>
          <p className="kindOf">{i.Situation}</p>
          {i.contents.map((j) => 
            (j.video != true) ?
              <Gallery key={j.id} src={j.src} alt={j.alt} onClick={() => setIsSelected(j)} /> :
              <Videt key={j.id} src={j.src} />
          )}
          </div>
        )}
      </div>
      {isSelected && (
        <Modal 
          opened={(isSelected !== null)} 
          onClose={() => setIsSelected(null)}
          content={isSelected && <CajaModal content={isSelected} />}>
        </Modal>
      )}
    </section>
  )
}

export default Projects