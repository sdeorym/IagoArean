import { Link } from "react-router-dom";
import Gallery from "@components/Gallery";
import domos0 from '@assets/varios/domos/Domos0.jpg'
import domos1 from '@assets/varios/domos/Domos1.jpg'
import domos2 from '@assets/varios/domos/Domos2.jpg'
import domos3 from '@assets/varios/domos/Domos3.jpg'

function Domos() {
    
    const gatos = [
        {
            id: 0,
            src: domos0,
            alt: "Proyecto gatos domésticos - gato 0" 
        },
        {
            id: 1,
            src: domos1,
            alt: "Proyecto gatos domésticos - gato 1"
        },
        {
            id: 2,
            src: domos2,
            alt: "Proyecto gatos domésticos - gato 2"},
        {
            id: 3,
            src: domos3,
            alt: "Proyecto gatos domésticos - gato 3"
            },
    ]

    return (
        <>
            <Link to="/portfolio/varios/domos"><h5>Fotos de gatos domésticos</h5></Link>
            <Gallery images={gatos} />
        </>
    )
}

export default Domos