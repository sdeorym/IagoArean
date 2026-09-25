function Gate( { title, src, alt } ) {
  return (
    <div className="gate">
      <img src= { src } alt={ alt } ></img>
      <h3>{title}</h3>
    </div>
  )
}

export default Gate