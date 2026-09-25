import insta from '@assets/ig.png'
import lindin from '@assets/li.png'

function Footer() {

    return (
        <footer>
            <span className="networkLinks">
                <a href="https://www.instagram.com/iago.arean/"><img src={insta} alt="Instagram Icon" target="_blank"></img></a>
                <a href="https://www.linkedin.com/in/santiago-arean-viveros/"><img src={lindin} alt="Linkedin Icon" target="_blank"></img></a>
            </span>
            <span>© Susana de Ory</span>
        </footer>
    )
}

export default Footer