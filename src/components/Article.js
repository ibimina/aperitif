import {useNavigate} from"react-router-dom"
import { useTheme } from "../hooks/useTheme";
import ThemeSelector from "./ThemeSelector";

export default function Article({recipes}) {
const {mode} = useTheme()

  const home = useNavigate()
  const goHome =()=>{
    home("/")
  }

  return (
    <div className={`container ${mode}`}>
      <ThemeSelector/>

      {recipes.drinks.map((drink) => (
        <div key={drink.idDrink}  className={`cocktail ${mode}`}>
          <div className="img-con">
            <img src={drink.strDrinkThumb} alt="beer images" />
          </div>

          <h3 className="name">
            {" "}
            <span>Cocktail: </span>
            {drink.strDrink}
          </h3>
          <p className="text">
            <span className="label">Alcoholic:</span> {drink.strAlcoholic}
          </p>
          <p className="desc text">
            {" "}
            <span className="label">Category: </span>
            {drink.strCategory}
          </p>
          <p className="text">
            {" "}
            <span className="label">Serving glass: </span> {drink.strGlass}
          </p>
          <p className="text">Ingredients:</p>
          <p>
            {drink.strMeasure1} {drink.strIngredient1}
          </p>
          <p>
            {drink.strMeasure2} {drink.strIngredient2}
          </p>
          <p>
            {drink.strMeasure3} {drink.strIngredient3}
          </p>
          <p>
            {drink.strMeasure4} {drink.strIngredient4}
          </p>
          <p>
            {drink.strMeasure5} {drink.strIngredient5}
          </p>

          <p>
            <span>Recipe:</span> {drink.strInstructions}
          </p>
          <button onClick={goHome} className="read">home</button>
        </div>
      ))}
    </div>
  );
  }

 