import { Link } from "react-router-dom";
import Gallery from "@components/Gallery";
import atl0 from '@assets/atl/atl0.jpg'
import atl1 from '@assets/atl/atl1.jpg'
import atl2 from '@assets/atl/atl2.jpg'
import atl3 from '@assets/atl/atl3.jpg'
import atl4 from '@assets/atl/atl4.jpg'
import atl5 from '@assets/atl/atl5.jpg'
import atl6 from '@assets/atl/atl6.jpg'
import atl7 from '@assets/atl/atl7.jpg'

function Atl() {
    const cristallo = [
        {
            id: 0,
            src: atl0,
            alt: "Proyecto murano - murano 0" 
        },
        {
            id: 1,
            src: atl1,
            alt: "Proyecto murano - murano 1"
        },
        {
            id: 2,
            src: atl2,
            alt: "Proyecto murano - murano 2"
        },
        {
            id: 3,
            src: atl3,
            alt: "Proyecto murano - murano 3"
            },
        {
            id: 4,
            src: atl4,
            alt: "Proyecto murano - murano 4" 
        },
        {
            id: 5,
            src: atl5,
            alt: "Proyecto murano - murano 5"
        },
        {
            id: 6,
            src: atl6,
            alt: "Proyecto murano - murano 6"
        },
        {
            id: 7,
            src: atl7,
            alt: "Proyecto murano - murano 7"
        },
    ]
    return (
        <>
            <Link to="atl"><h4>Proyecto Murano</h4></Link>
            <Gallery images={cristallo} />
        </>
    )
}

export default Atl