import React, { useState } from "react";
import axios from "axios";
import Card from "../card/Card";
import homeSvg from "../../assets/home.svg";
import { HomeImg, ImgDiv } from "./Header.styled";

const Form = () => {
  const [searchText, setSearchText] = useState("");
  const [mealType, setMealType] = useState("");
  const [error, setError] = useState("");
  const [recipe, setRecipe] = useState([]);
  const appKey = process.env.REACT_APP_API_KEY;
  const appID = process.env.REACT_APP_API_ID;

  const url = `https://api.edamam.com/api/recipes/v2?type=any&beta=false&q=${searchText}&app_id=${appID}&app_key=${appKey}&mealType=${mealType}`;

  // second url
  const url1 = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchText}&app_id=${appID}&app_key=${appKey}&mealType=${mealType}`;

  const getMeal = async () => {
    try {
      if (searchText) {
        const {
          data: { hits },
        } = await axios(url);
        setRecipe(hits);
        console.log(hits);
      }
    } catch (error) {
      setError("Wrong request, check your API");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchText) {
      setError("Please enter a food name");
      console.log("Arama alanı boş bırakılsı");
    } else {
      getMeal();
      console.log("searchText :>> ", searchText);
      console.log("mealType :>> ", mealType);
      setSearchText("");
    }

    setTimeout(() => {
      setError("");
    }, 2000);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Cooper Food App</h2>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search for food"
          autoFocus
        />
        <button>Search</button>
        <label htmlFor="meal"></label>
        <select
          name="mealtype"
          id="meal"
          value={mealType}
          onChange={(e) => setMealType(e.target.value)}
        >
          <option disabled selected value="mealType">
            Meal Type
          </option>
          <option value="breakfast">Breakfast</option>
          <option value="brunch">Brunch</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snack">Snack</option>
          <option value="teatime">Teatime</option>
        </select>
        <p>{error}</p>
      </form>
      {recipe.length === 0 && (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
      {recipe.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </>
  );
};

export default Form;
