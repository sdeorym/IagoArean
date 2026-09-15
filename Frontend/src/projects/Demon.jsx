import Gallery from "@components/Gallery";
import demon0 from '@assets/demon/demon_directing.webp'
import demon_sb_1 from '@assets/demon/Demon_storyboard_01.webp'
import demon_sb_2 from '@assets/demon/Demon_storyboard_02.webp'
import demon_sb_3 from '@assets/demon/Demon_storyboard_03.webp'
import demon_sb_4 from '@assets/demon/Demon_storyboard_04.webp'
import demon_sb_5 from '@assets/demon/Demon_storyboard_05.webp'
import demon_sb_6 from '@assets/demon/Demon_storyboard_06.webp'
import demon_sb_7 from '@assets/demon/Demon_storyboard_07.webp'
import demon_c_1 from '@assets/demon/Demon_character_01.webp'
import demon_c_2 from '@assets/demon/Demon_character_02.webp'
import demon_c_3 from '@assets/demon/Demon_character_03.webp'
import demon_c_4 from '@assets/demon/Demon_character_04.webp'
import demon_c_5 from '@assets/demon/Demon_character_05.webp'
import demon_c_6 from '@assets/demon/Demon_character_06.webp'
import demon_c_7 from '@assets/demon/Demon_character_07.webp'
import demon_c_8 from '@assets/demon/Demon_character_08.webp'
import demon_c_9 from '@assets/demon/Demon_character_09.webp'


function Demon() {
    const demonboy = [
        {
            id: 0,
            src: demon0,
            alt: "The boy and the demon - direction",
            type: "Direction"   
        },
        {
            id: 1,
            src: demon_sb_1,
            alt: "The boy and the demon - storyboard",
            type: "Storyboard"  
        },
        {
            id: 2,
            src: demon_sb_2,
            alt: "The boy and the demon - storyboard",
            type: "Storyboard"
        },
        {
            id: 3,
            src: demon_sb_3,
            alt: "The boy and the demon - storyboard",
            type: "Storyboard"
            },
        {
            id: 4,
            src: demon_sb_4,
            alt: "The boy and the demon - storyboard",
            type: "Storyboard" 
        },
        {
            id: 5,
            src: demon_sb_5,
            alt: "The boy and the demon - storyboard",
            type: "Storyboard"
        },
        {
            id: 6,
            src: demon_sb_6,
            alt: "The boy and the demon - storyboard",
            type: "Storyboard"
        },
        {
            id: 7,
            src: demon_sb_7,
            alt: "The boy and the demon - storyboard",
            type: "Storyboard"
        },
        {
            id: 8,
            src: demon_c_1,
            alt: "The boy and the demon - character",
            type: "Character design"
        },
        {
            id: 9,
            src: demon_c_2,
            alt: "The boy and the demon - character",
            type: "Character design"
        },
        {
            id: 10,
            src: demon_c_3,
            alt: "The boy and the demon - character",
            type: "Character design"
        },
        {
            id: 11,
            src: demon_c_4,
            alt: "The boy and the demon - character",
            type: "Character design"
        },
        {
            id: 12,
            src: demon_c_5,
            alt: "The boy and the demon - character",
            type: "Character design"
        },
        {
            id: 13,
            src: demon_c_6,
            alt: "The boy and the demon - character",
            type: "Character design"
        },{
            id: 14,
            src: demon_c_7,
            alt: "The boy and the demon - character",
            type: "Character design"
        },
        {
            id: 15,
            src: demon_c_8,
            alt: "The boy and the demon - character",
            type: "Character design"
        },
        {
            id: 16,
            src: demon_c_9,
            alt: "The boy and the demon - character",
            type: "Character design"
        },
    ]
    return (
        <>
            <div className="projectClass">
                <h4>The boy and the demon</h4>
                <p>Gobelins Graduation Film<br />2026</p>
            </div>
            <Gallery images={demonboy} />
        </>
    )
}

export default Demon