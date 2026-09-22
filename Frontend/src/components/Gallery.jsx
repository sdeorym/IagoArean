function Gallery( { src, alt } ) {
  return (
    <div className="gallery">
      <img src= { src } alt={ alt }></img>
    </div>
  )
}

export default Gallery