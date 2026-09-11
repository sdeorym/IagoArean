import { Outlet, useLocation, Link } from "react-router-dom"
import '@styles/Portfolio.css';
function Portfolio() {
  const location = useLocation()
  const isIndex = location.pathname === "/portfolio" || location.pathname === "/portfolio/"

  return (
    <section id="portfolio">   
      {!isIndex ? (<Link to="/portfolio"><h3>← Volver a Portfolio</h3></Link>) : <h3>Mi portfolio</h3>}
      <Outlet />
    </section>
  )
}

export default Portfolio