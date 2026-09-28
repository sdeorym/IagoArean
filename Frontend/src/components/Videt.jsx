function Videt( {src, caption} ) {
  return (
    <figure>
      <iframe
        src={src}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      {caption&&<figcaption>{caption}</figcaption>}
    </figure>
  )
}

export default Videt