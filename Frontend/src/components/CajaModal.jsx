
function CajaModal({content}) {


return (
    <>
        <div className="caja">
            <img src={content.src} alt={content.description}></img>
        </div>
    </>
)

}

export default CajaModal