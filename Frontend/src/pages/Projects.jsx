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
      <div className="gallery">
        {proyecto.projects?.map((i, iIdx) =>
          <div key={i.id}>
          <h2>{i.Name}</h2>
          <p className="kindOf">{i.Situation}</p>
            <div className="mosaic">          
              {i.contents.map((j, jIdx) =>
                (j.video != true) ? (
                  <div key={j.id}>
                    <Gallery src={j.src} alt={j.alt} classname={j.className} 
                    loading={iIdx === 0 && jIdx < 2 ? "eager" : "lazy"}
                    fetchPriority={iIdx === 0 && jIdx === 0 ? "high" : "auto"}
                    onClick={() => setIsSelected(j)} />
                    <span dangerouslySetInnerHTML={{ __html: j.text }} />
                  </div>
                ) : (
                  <Videt key={j.id} src={j.src} />
                )
              )}
            </div>
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