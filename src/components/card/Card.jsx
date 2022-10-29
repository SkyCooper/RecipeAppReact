import React from 'react'

const Card = ({recipe}) => {
  return (
    <div>
      <h3>{recipe.label}</h3>
      <img src={recipe.image} alt="" />
      <button>{recipe.uri}</button>
    </div>
  )
}

export default Card