function Gallery( { src, alt, onClick } ) {
  return (
    <div className="gallery">
      <img src= { src } alt={ alt } onClick = {onClick}></img>
    </div>
  )
}

export default Gallery