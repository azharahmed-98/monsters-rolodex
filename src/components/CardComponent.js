function CardComponent(prop) {
  return(
    <div className="monster-card">
      <img alt={prop.name}>{prop.img}</img>
    </div>
  )
}

export default CardComponent;