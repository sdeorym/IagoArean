import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();
    const isHome = location.pathname === "/";
    const isAbout = location.pathname === "/about";
    const isPort = location.pathname.startsWith("/portfolio/");
    const isContact = location.pathname === "/contact";

    return (
        <nav>
            <span className="pageTitle">
                <NavLink to="/" className="tit"><h1>Iago Arean</h1></NavLink>
            </span>
            <span className="pageIndex">
                <NavLink to="/portfolio/" className={isPort ? "navLink activePage" : "navLink"}>Portfolio</NavLink>
                <NavLink to="/about" className={isAbout ? "navLink activePage" : "navLink"}>About</NavLink>
                <NavLink to="/contact" className={isContact ? "navLink activePage" : "navLink"}>Contact</NavLink>
            </span>
        </nav>
    )
}

export default Navbar