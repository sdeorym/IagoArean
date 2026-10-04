function Gallery( { src, alt, classname, loading, fetchpriority, onClick } ) {
  return (
    <figure>
      <img src= { src } alt={ alt } className={classname} loading={loading} fetchpriority={fetchpriority} onClick = {onClick}></img>
    </figure>
  )
}

export default Gallery