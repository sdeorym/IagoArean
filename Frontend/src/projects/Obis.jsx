import { Link } from "react-router-dom";
import Gallery from "@components/Gallery";
import obis0 from '@assets/obis/obis0.jpg'
import obis1 from '@assets/obis/obis1.jpg'
import obis2 from '@assets/obis/obis2.jpg'
import obis3 from '@assets/obis/obis3.jpg'
import obis4 from '@assets/obis/obis4.jpg'
import obis5 from '@assets/obis/obis5.jpg'
import obis6 from '@assets/obis/obis6.jpg'
import obis7 from '@assets/obis/obis7.jpg'

function Obis() {
    
    const chiana = [
        {
            id: 0,
            src: obis0,
            alt: "Proyecto Lucignano 0" 
        },
        {
            id: 1,
            src: obis1,
            alt: "Proyecto Lucignano 1"
        },
        {
            id: 2,
            src: obis2,
            alt: "Proyecto Lucignano 2"
        },
        {
            id: 3,
            src: obis3,
            alt: "Proyecto Lucignano 3"
            },
        {
            id: 4,
            src: obis4,
            alt: "Proyecto Lucignano 4" 
        },
        {
            id: 5,
            src: obis5,
            alt: "Proyecto Lucignano 5"
        },
        {
            id: 6,
            src: obis6,
            alt: "Proyecto Lucignano 6"
        },
        {
            id: 7,
            src: obis7,
            alt: "Proyecto Lucignano 7"
        },
    ]
    return (
        <>
            <Link to="obis"><h4>Proyecto obis - Lucignano</h4></Link>
            <Gallery images={chiana} />
        </>
    )
}

export default Obis