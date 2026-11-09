import { Link } from "react-router-dom";
import '@styles/Admin.css';

function Admin() {

    return(
        <section id="admin">
            <div className="issues">
                <Link to="/categorias" className="fielding">Categorías</Link>
                <Link to="/proyectos" className="fielding">Proyectos</Link>
                <Link to="/imagenes" className="fielding">Imágenes</Link>
            </div>
        </section>
    )

}

export default Admin