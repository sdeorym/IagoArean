import updatey from "@assets/update.png";
import erasure from "@assets/delete.png";
import Button from "@components/Button";

function Muestra({classname, content, name, position, onUpdate, onDelete}) {

    return (
        <div className={classname}>
            {content.map((i) => 
                <div key={i.id}>
                    <div className="cuadro">
                        <div className={position}>
                            <span className="iconitos">
                                <Button type="button" classname="button_crud" text={<img src={updatey} alt="Modificar"></img>} onClick={() => onUpdate(i)} />
                                <Button type="button" classname="button_crud" text={<img src={erasure} alt="Eliminar"></img>} onClick={() => onDelete(i)} />                                
                            </span>
                            <span>
                                <img src={i.image} alt={i.alt}></img>
                                <b>{i.title}</b>&nbsp;{i.situation}
                            </span>
                        </div>                            
                    </div>
                </div>)}
        </div>
    )
}

export default Muestra