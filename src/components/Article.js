import {useNavigate} from"react-router-dom"
import { useTheme } from "../hooks/useTheme";


export default function Article({recipes}) {
const {mode} = useTheme()

  const home = useNavigate()
  const goHome =()=>{
    home(-1)
  }


  return (
    <div className={`article-wrap ${mode}`}>
      {recipes.drinks.map((drink) => (
        <div key={drink.idDrink} className={`art ${mode} flex`}>
          <div className="art-img item">
            <img src={drink.strDrinkThumb} alt="beer images" />
          </div>

          <div className="item ">
            <h3 className="name">
              {" "}
              <span>Cocktail: </span>
              {drink.strDrink}
            </h3>

            <div>
              <p className="text">
                <span className="label">Alcoholic:</span> {drink.strAlcoholic}
              </p>
              <p className="desc text">
                {" "}
                <span className="label">Category: </span>
                {drink.strCategory}
              </p>
            </div>
            <p className="text">
              {" "}
              <span className="label">Serving glass: </span> {drink.strGlass}
            </p>

            <div className="ingr-wrap">
              <p className="text">Ingredients:</p>
              <div className="spa">
                <p className="left line">
                  {drink.strMeasure1} {drink.strIngredient1}
                </p>
                <p className="left line">
                  {drink.strMeasure2} {drink.strIngredient2}
                </p>
                <p className="left line">
                  {drink.strMeasure3} {drink.strIngredient3}
                </p>
                <p className="left line">
                  {drink.strMeasure4} {drink.strIngredient4}
                </p>
                <p className="left line">
                  {drink.strMeasure5} {drink.strIngredient5}
                </p>
                <p className="left line">
                  {drink.strMeasure6} {drink.strIngredient6}
                </p>
                <p className="left line">
                  {drink.strMeasure7} {drink.strIngredient7}
                </p>
              </div>
            </div>
            <p className="left ">
              <span className="text rec-tit">Recipe:</span>{" "}
              {drink.strInstructions}
            </p>
            <button onClick={goHome} className={`home ${mode}`}>
              back
            </button>
          </div>
        </div>
      ))}
    </div>
  );
  }

 