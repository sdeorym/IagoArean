import { useState } from "react";
import { useData } from "../context/DataContext";
import Modal from "@components/Modal";
import CajaModal from "@components/CajaModal";
import Gallery from "@components/Gallery";
import Videt from "@components/Videt";
import '@styles/Portfolio.css';

function Portfolio() {
  const { data, error } = useData()
  const [isSelected, setIsSelected] = useState(null);

  console.log("render, isSelected es:", isSelected); 
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
                <Gallery key={j.id} src={j.src} alt={j.description} onClick={() => { setIsSelected(j); console.log(isSelected);}} /> :
                <Videt key={j.id} src={j.src} />
              )}
          </div>
        </div>)}
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

export default Portfolio