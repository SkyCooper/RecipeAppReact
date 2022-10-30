import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CardWrapper, Button } from "./Card.styled";

const Card = ({recipe}) => {
  const navigate = useNavigate()
  return (
    <CardWrapper>
      <h3>{recipe.label}</h3>
      <img src={recipe.image} alt="" />
      <Button onClick={() => navigate((`/details/${recipe.label}`),{ state: recipe })}>Details</Button>
    </CardWrapper>
  );
}

export default Card