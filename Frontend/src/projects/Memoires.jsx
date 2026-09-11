import { Link } from "react-router-dom";
import Gallery from "@components/Gallery";
import cendres0 from '@assets/memoires/cendres0.jpg'
import cendres1 from '@assets/memoires/cendres1.jpg'
import cendres2 from '@assets/memoires/cendres2.jpg'
import cendres3 from '@assets/memoires/cendres3.jpg'
import cendres4 from '@assets/memoires/cendres4.jpg'
import cendres5 from '@assets/memoires/cendres5.jpg'
import cendres6 from '@assets/memoires/cendres6.jpg'
import cendres7 from '@assets/memoires/cendres7.jpg'
function Memoires() {
    const istanbul = [
        {
            id: 0,
            src: cendres0,
            alt: "Proyecto Estambul 0" 
        },
        {
            id: 1,
            src: cendres1,
            alt: "Proyecto Estambul 1"
        },
        {
            id: 2,
            src: cendres2,
            alt: "Proyecto Estambul 2"
        },
        {
            id: 3,
            src: cendres3,
            alt: "Proyecto Estambul 3"
            },
        {
            id: 4,
            src: cendres4,
            alt: "Proyecto Estambul 4" 
        },
        {
            id: 5,
            src: cendres5,
            alt: "Proyecto Estambul 5"
        },
        {
            id: 6,
            src: cendres6,
            alt: "Proyecto Estambul 6"
        },
        {
            id: 7,
            src: cendres7,
            alt: "Proyecto Estambul 7"
        },
    ]
    return (
        <>
            <Link to="memoires"><h4>Fotos de Estambul</h4></Link>
            <Gallery images={istanbul} />
        </>
    )
}

export default Memoires