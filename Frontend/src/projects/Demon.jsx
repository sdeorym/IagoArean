import { Link } from "react-router-dom";
import Gallery from "@components/Gallery";
import demon0 from '@assets/demon/demon0.jpg'
import demon1 from '@assets/demon/demon1.jpg'
import demon2 from '@assets/demon/demon2.jpg'
import demon3 from '@assets/demon/demon3.jpg'
import demon4 from '@assets/demon/demon4.jpg'
import demon5 from '@assets/demon/demon5.jpg'
import demon6 from '@assets/demon/demon6.jpg'
import demon7 from '@assets/demon/demon7.jpg'

function Demon() {
    const capital = [
        {
            id: 0,
            src: demon0,
            alt: "Proyecto ciudad - ciudad 0" 
        },
        {
            id: 1,
            src: demon1,
            alt: "Proyecto ciudad - ciudad 1"
        },
        {
            id: 2,
            src: demon2,
            alt: "Proyecto ciudad - ciudad 2"
        },
        {
            id: 3,
            src: demon3,
            alt: "Proyecto ciudad - ciudad 3"
            },
        {
            id: 4,
            src: demon4,
            alt: "Proyecto ciudad - ciudad 4" 
        },
        {
            id: 5,
            src: demon5,
            alt: "Proyecto ciudad - ciudad 5"
        },
        {
            id: 6,
            src: demon6,
            alt: "Proyecto ciudad - ciudad 6"
        },
        {
            id: 7,
            src: demon7,
            alt: "Proyecto ciudad - ciudad 7"
        },
    ]
    return (
        <>
            <Link to="demon"><h4>Fotos de capitales del sur de la UE</h4></Link>
            <Gallery images={capital} />
        </>
    )
}

export default Demon