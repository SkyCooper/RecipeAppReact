import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({recipe}) => {
  const navigate = useNavigate()
  return (
    <div>
      <h3>{recipe.label}</h3>
      <img src={recipe.image} alt="" />
      <button onClick={() => navigate((`/details/${recipe.label}`),{ state: recipe })}>Details</button>
    </div>
  );
}

export default Card