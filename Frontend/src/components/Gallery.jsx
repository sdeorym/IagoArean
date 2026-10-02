function Gallery( { src, alt, classname, onClick, caption } ) {
  return (
    <figure>
      <img src= { src } alt={ alt } className={classname} onClick = {onClick}></img>
      {caption&&<figcaption>{caption}</figcaption>}
    </figure>
  )
}

export default Gallery