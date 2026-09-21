function Gallery({ images }) {
  return (
    <div className="gallery">
      {images.map((img) => (
        <img key={img.id} src={img.source} alt={img.description} />
      ))}
    </div>
  )
}

export default Gallery