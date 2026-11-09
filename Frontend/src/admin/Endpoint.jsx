
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useData } from "../context/DataContext";
import { Link } from "react-router-dom";
import Muestra from "@admin/Muestra";
import arrow from '@assets/la.png';
import addition from "@assets/add.png";
import Button from "@components/Button";
import Modal from "@components/Modal";
import FormModal from "@admin/FormModal";

function Endpoint() {
    const [isSelected, setIsSelected] = useState(null);
    const [aEliminar, setAEliminar] = useState(null);
    const { endpoint } = useParams();
    const { data } = useData();

    const field = {
        categorias: { key: "categorias", title: "Categorías" },
        proyectos: { key: "proyectos",  title: "Proyectos" },
        imagenes: { key: "imagenes",   title: "Imágenes" },
    };
    const titre = field[endpoint]?.title;
    const campos = {
        categorias: (data ?? []).map((cat) => ({ id: cat.id, title: cat.title, image: cat.image, alt: cat.alt })),
        proyectos: (data ?? []).flatMap((cat) => (cat.projects ?? []).map((pry) => ({ id: pry.id, title: pry.name, situation: pry.situation }))),
        imagenes: (data ?? []).flatMap((cat) => (cat.projects ?? []).flatMap((pry) => (pry.contents ?? []).map((imgn) => ({ id: imgn.id, image: imgn.src, alt: imgn.alt, video: imgn.video })))),
    };

    return (
        <section>

            <span className="adminTitle">
                <Link to="/"><img src={arrow} alt="Volver a admin"></img></Link>
                <h2>{titre}</h2>
                <Button type="button" classname="button_crud" text={<img src={addition} alt="Añadir" className="ajoutance"></img>} onClick={() => setIsSelected(true)} />                
            </span>

            <Muestra 
                classname = {(titre == "Proyectos") ? "muestra lista" : "muestra thumbnail"}
                content = {campos[endpoint]}
                name={titre}
                position = {(titre == "Proyectos") ? "beside" : "below"}
                onUpdate={setIsSelected}
                onDelete={setAEliminar}
            />
            {isSelected && (
                <Modal 
                    opened={(isSelected !== null)} 
                    onClose={() => setIsSelected(null)}
                    content={isSelected && <FormModal content={isSelected} />}>
                </Modal>
            )}
            {aEliminar && (
                <Modal 
                    opened={(aEliminar !== null)} 
                    onClose={() => setAEliminar(null)}
                    content={aEliminar && <FormModal content={aEliminar} eliminar />}>
                </Modal>
            )}
        </section>
    )
}

export default Endpoint