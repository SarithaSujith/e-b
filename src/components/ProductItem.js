import React from 'react'

function ProductItem({name, image, price, onAdd}) {
  return (
    <div>
      <div className='mainItem'> <img src={image} alt="" /> </div>
      <h2>{name}</h2>
      <p>€{price}</p>
      <div>
        <button  onClick={() => onAdd(price)}className='btn'>Add To Cart</button>
      </div>
      </div>
  )
}

export default ProductItem