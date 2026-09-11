import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();
    const isHome = location.pathname === "/";
    const isAbout = location.pathname === "/about";
    const isPort = location.pathname === "/portfolio/";
    const isContact = location.pathname === "/contact";

    return (
        <nav>
            <span className="pageTitle">
                <h1>Iago Arean</h1>
                <h2>Portfolio animation</h2>
            </span>
            <span className="pageIndex">
                <NavLink to="/" className={isHome ? "navLink activePage" : "navLink"}>Accueil</NavLink>
                <NavLink to="/about" className={isAbout ? "navLink activePage" : "navLink"}>À propos</NavLink>
                <NavLink to="/portfolio/" className={isPort ? "navLink activePage" : "navLink"}>Portfolio</NavLink>
                <NavLink to="/contact" className={isContact ? "navLink activePage" : "navLink"}>Contact</NavLink>
            </span>
        </nav>
    )
}

export default Navbar