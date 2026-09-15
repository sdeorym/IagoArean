import Gallery from "@components/Gallery";
import Artist0 from '@assets/Artist/Artist_character_00.webp'
import Artist1 from '@assets/Artist/Artist_character_01.webp'
import Artist2 from '@assets/Artist/Artist_character_02.webp'
import Artist3 from '@assets/Artist/Artist_character_03.webp'

function Artist() {
    const artists = [
        {
            id: 0,
            src: Artist0,
            alt: "Character design - The artist",
            type: "Character design" 
        },
        {
            id: 1,
            src: Artist1,
            alt: "Character design - The artist",
            type: "Character design" 
        },
        {
            id: 2,
            src: Artist2,
            alt: "Character design - The artist",
            type: "Character design" 
        },
        {
            id: 3,
            src: Artist3,
            alt: "Character design - The artist",
            type: "Character design" 
        }
    ]
    return (
        <>
            <div className="projectClass">
                <h4>The artist</h4>
                <p>Personal Project  2024</p>
            </div>
            <Gallery images={artists} />
        </>
    )
}

export default Artist