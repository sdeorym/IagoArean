function Gallery( { src, alt, onClick, caption } ) {
  return (
    <figure>
      <img src= { src } alt={ alt } onClick = {onClick}></img>
      {caption&&<figcaption>{caption}</figcaption>}
    </figure>
  )
}

export default Gallery