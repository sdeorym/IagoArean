function Videt( {src} ) {
  return (
    <div className="gallery">
      <iframe
        src={src}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <br />
    </div>
  )
}

export default Videt