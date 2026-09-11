function Gallery({ images }) {
  return (
    <div className="gallery">
      {images.map((img) => (
        <img key={img.id} src={img.src} alt={img.alt} />
      ))}
    </div>
  )
}

export default Gallery