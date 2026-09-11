import { Link } from "react-router-dom";
import Gallery from "@components/Gallery";
import obos0 from '@assets/obos/obos0.jpg'
import obos1 from '@assets/obos/obos1.jpg'
import obos2 from '@assets/obos/obos2.jpg'
import obos3 from '@assets/obos/obos3.jpg'
import obos4 from '@assets/obos/obos4.jpg'
import obos5 from '@assets/obos/obos5.jpg'
import obos6 from '@assets/obos/obos6.jpg'
import obos7 from '@assets/obos/obos7.jpg'

function Obos() {
    const liorna = [
        {
            id: 0,
            src: obos0,
            alt: "Proyecto Livorno 0" 
        },
        {
            id: 1,
            src: obos1,
            alt: "Proyecto Livorno 1"
        },
        {
            id: 2,
            src: obos2,
            alt: "Proyecto Livorno 2"
        },
        {
            id: 3,
            src: obos3,
            alt: "Proyecto Livorno 3"
            },
        {
            id: 4,
            src: obos4,
            alt: "Proyecto Livorno 4" 
        },
        {
            id: 5,
            src: obos5,
            alt: "Proyecto Livorno 5"
        },
        {
            id: 6,
            src: obos6,
            alt: "Proyecto Livorno 6"
        },
        {
            id: 7,
            src: obos7,
            alt: "Proyecto Livorno 7"
        },
    ]
    return (
        <>
            <Link to="obos"><h4>Proyecto obos - Livorno</h4></Link>
            <Gallery images={liorna} />
        </>
    )
}

export default Obos