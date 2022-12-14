import React from "react";
import { Link } from "react-router-dom";

//custom hook
import { useTheme } from "../hooks/useTheme";

export default function Liquor({ data }) {
const {mode} = useTheme()

  if (data.drinks === null) {
    return <p>No recipe found</p>;
  }

  return (
    <div className="cocktail-wrap">
      {data.drinks.map((cocktail) => (
        <div key={cocktail.idDrink} className={`cocktail ${mode}`}>
          {/* <div className="img-con"> */}
            <Link
              to={`/cocktails/${cocktail.idDrink}`}
            >
              <img src={cocktail.strDrinkThumb} alt="beer images" />
            </Link>
          {/* </div> */}
          <h3 className={`name ${mode}`}>
            {" "}
            <span>Cocktail: </span> {cocktail.strDrink}
          </h3>
          <p className="text">
            <span className="label">Alcoholic:</span> {cocktail.strAlcoholic}
          </p>
          <p className="desc text">
            {" "}
            <span className="label">Category:</span> {cocktail.strCategory}
          </p>
          <Link
            to={`/cocktails/${cocktail.idDrink}`}
            className={`read ${mode}`}
          >
            Read recipes
          </Link>
        </div>
      ))}
    </div>
  );
}
