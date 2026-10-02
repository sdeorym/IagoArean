function Gate( { title, src, alt } ) {
  return (
    <div className="gate">
      <img src= { src } alt={ alt } ></img>
      <h4>{title}</h4>
    </div>
  )
}

export default Gate