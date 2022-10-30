import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Details = () => {
  const { state: recipe } = useLocation();
  const navigate = useNavigate();
  console.log(recipe);
  const { label, image, ingredientLines, calories } = recipe;
  return (
    <>
      <div>
        <h1>{label}</h1>
        <img src="" alt="" />
      </div>
      <div>
        <ul>
          <li>Calories : {calories}</li>
        </ul>
        <img src={image} alt="" />
        <ul>{ingredientLines.map(item => <li> {item}</li>)}</ul>
      </div>
      <div>
        <button onClick={() => navigate(-1)}>Go back</button>
        <button onClick={() => navigate("/")}>Home</button>
      </div>
    </>
  );
};

export default Details;
