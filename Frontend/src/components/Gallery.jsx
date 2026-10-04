function Gallery( { src, alt, classname, loading, fetchpriority, caption,onClick } ) {
  return (
    <figure>
      <img src= { src } alt={ alt } className={classname} loading={loading} fetchpriority={fetchpriority} onClick = {onClick}></img>
      {caption && <figcaption dangerouslySetInnerHTML={{ __html: caption }} />}
    </figure>
  )
}

export default Gallery