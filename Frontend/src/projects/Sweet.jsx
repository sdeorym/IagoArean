import Gallery from "@components/Gallery";
import Sweet_c_1 from '@assets/Sweet/Sweet_character_01.webp'
import Sweet_c_2 from '@assets/Sweet/Sweet_character_02.webp'
import Sweet_sb_1 from '@assets/Sweet/Sweet_storyboard_01.webp'
import Sweet_sb_2 from '@assets/Sweet/Sweet_storyboard_02.webp'
import Sweet_sb_3 from '@assets/Sweet/Sweet_storyboard_03.webp'
import Sweet_sb_4 from '@assets/Sweet/Sweet_storyboard_04.webp'

function Sweet() {
    const sweety = [
        {
            id: 0,
            src: Sweet_c_1,
            alt: "Characters from A sweet tale",
            type: "Character design"  
        },
        {
            id: 1,
            src: Sweet_c_2,
            alt: "Characters from A sweet tale",
            type: "Character design" 
        },
        {
            id: 2,
            src: Sweet_sb_1,
            alt: "Storyboard from A sweet tale",
            type: "Storyboard" 
        },
        {
            id: 3,
            src: Sweet_sb_2,
            alt: "Storyboard from A sweet tale",
            type: "Storyboard" 
            },
        {
            id: 4,
            src: Sweet_sb_3,
            alt: "Storyboard from A sweet tale" ,
            type: "Storyboard" 
        },
        {
            id: 5,
            src: Sweet_sb_4,
            alt: "Storyboard from A sweet tale",
            type: "Storyboard" 
        }
    ]
    return (
        <>
            <div className="projectClass">
                <h4>A sweet tale</h4>
                <p>ANNECY FESTIVAL 2024 Opening Shortfilm</p>
            </div>
            <Gallery images={sweety} />
        </>
    )
}

export default Sweet