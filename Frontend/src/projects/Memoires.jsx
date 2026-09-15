import Gallery from "@components/Gallery";
import cendres0 from '@assets/memoires/Memoires_Storyboard_01.webp'
import cendres1 from '@assets/memoires/Memoires_Storyboard_02.webp'
import cendres2 from '@assets/memoires/Memoires_Storyboard_03.webp'
import cendres3 from '@assets/memoires/Memoires_Storyboard_04.webp'
import cendres4 from '@assets/memoires/Memoires_Storyboard_05.webp'

function Memoires() {
    const cendres = [
        {
            id: 0,
            src: cendres0,
            alt: "Mémoires des cendres",
            type: "Storyboard"  
        },
        {
            id: 1,
            src: cendres1,
            alt: "Mémoires des cendres Storyboard",
            type: "Storyboard"  
        },
        {
            id: 2,
            src: cendres2,
            alt: "Mémoires des cendres Storyboard",
            type: "Storyboard"  
        },
        {
            id: 3,
            src: cendres3,
            alt: "Mémoires des cendres Storyboard",
            type: "Storyboard"  
            },
        {
            id: 4,
            src: cendres4,
            alt: "Mémoires des cendres Storyboard",
            type: "Storyboard"   
        }
    ]
    return (
        <>
            <div className="projectClass">
                <h4><a href="https://memoires-des-cendres.alwaysdata.net/" target="_blank" rel="noopener noreferrer">Mémoires des cendres</a></h4>
                <p>Digital Graphic Novel about Spanish Civil War<br />Storyboard and final illustrations<br />2025</p>
            </div>
            
            <Gallery images={cendres} />
        </>
    )
}

export default Memoires