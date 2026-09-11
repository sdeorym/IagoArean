import { Link } from "react-router-dom";
import Gallery from "@components/Gallery";
import concha00 from '@assets/varios/Conchas/conchas00.jpg'
import concha01 from '@assets/varios/Conchas/conchas01.jpg'
import concha02 from '@assets/varios/Conchas/conchas02.jpg'
import concha03 from '@assets/varios/Conchas/conchas03.jpg'
import concha04 from '@assets/varios/Conchas/conchas04.jpg'
import concha05 from '@assets/varios/Conchas/conchas05.jpg'
import concha06 from '@assets/varios/Conchas/conchas06.jpg'
import concha07 from '@assets/varios/Conchas/conchas07.jpg'
import concha08 from '@assets/varios/Conchas/conchas08.jpg'
import concha09 from '@assets/varios/Conchas/conchas09.jpg'
import concha10 from '@assets/varios/Conchas/conchas10.jpg'
import concha11 from '@assets/varios/Conchas/conchas11.jpg'

function Conchas() {
    const conchas = [
            {
                id: 0,
                src: concha00,
                alt: "Proyecto conchas - concha 0" 
            },
            {
                id: 1,
                src: concha01,
                alt: "Proyecto conchas - concha 1"
            },
            {
                id: 2,
                src: concha02,
                alt: "Proyecto conchas - concha 2"},
            {
                id: 3,
                src: concha03,
                alt: "Proyecto conchas - concha 3"
                },
            {
                id: 4,
                src: concha04,
                alt: "Proyecto conchas - concha 4" 
            },
            {
                id: 5,
                src: concha05,
                alt: "Proyecto conchas - concha 5"
            },
            {
                id: 6,
                src: concha06,
                alt: "Proyecto conchas - concha 6"
            },
            {
                id: 7,
                src: concha07,
                alt: "Proyecto conchas - concha 7"
            },
            {
                id: 8,
                src: concha08,
                alt: "Proyecto conchas - concha 8" 
            },
            {
                id: 9,
                src: concha09,
                alt: "Proyecto conchas - concha 9"
            },
            {
                id: 10,
                src: concha10,
                alt: "Proyecto conchas - concha 10"
            },
            {
                id: 11,
                src: concha11,
                alt: "Proyecto conchas - concha 11"
                },
        ]
    return (
        <>
            <Link to="/portfolio/varios/conchas"><h5>Fotos de conchas</h5></Link>
            <Gallery images={conchas} />
        </>
    )
}

export default Conchas