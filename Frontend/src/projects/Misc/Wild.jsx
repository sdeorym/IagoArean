import { Link } from "react-router-dom";
import Gallery from "@components/Gallery";
import wild0 from '@assets/varios/wild/Wild0.jpg'
import wild1 from '@assets/varios/wild/Wild1.jpg'
import wild2 from '@assets/varios/wild/Wild2.jpg'
import wild3 from '@assets/varios/wild/Wild3.jpg'
import wild4 from '@assets/varios/wild/Wild4.jpg'
import wild5 from '@assets/varios/wild/Wild5.jpg'
import wild6 from '@assets/varios/wild/Wild6.jpg'
import wild7 from '@assets/varios/wild/Wild7.jpg'
function Wild() {
    const gatazos = [
        {
            id: 0,
            src: wild0,
            alt: "Proyecto gatos salvajes - gato 0" 
        },
        {
            id: 1,
            src: wild1,
            alt: "Proyecto gatos salvajes - gato 1"
        },
        {
            id: 2,
            src: wild2,
            alt: "Proyecto gatos salvajes - gato 2"},
        {
            id: 3,
            src: wild3,
            alt: "Proyecto gatos salvajes - gato 3"
            },
                    {
            id: 4,
            src: wild4,
            alt: "Proyecto gatos salvajes - gato 4" 
        },
        {
            id: 5,
            src: wild5,
            alt: "Proyecto gatos salvajes - gato 5"
        },
        {
            id: 6,
            src: wild6,
            alt: "Proyecto gatos salvajes - gato 6"
        },
        {
            id: 7,
            src: wild7,
            alt: "Proyecto gatos salvajes - gato 7"
        },
    ]
    return (
        <>
            <Link to="/portfolio/varios/wild"><h5>Fotos de gatos salvajes</h5></Link>
            <Gallery images={gatazos} />
        </>
    )
}

export default Wild