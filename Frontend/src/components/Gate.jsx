function Gate( { title, src, alt } ) {
  return (
    <div className="gate">
      <img src= { src } alt={ alt } ></img>
      <h2>{title}</h2>
    </div>
  )
}

export default Gate