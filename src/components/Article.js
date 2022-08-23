import {useNavigate} from"react-router-dom"
import { useTheme } from "../hooks/useTheme";


export default function Article({recipes}) {

const {mode} = useTheme()

  const home = useNavigate()
  const goHome =()=>{
    home("/")
  }
     const ingredientsAndMeasures = [];
     function getIngredientsMeasurements() {
       const [drink] = recipes;
      //  console.log(drink["idDrink"]);
        let i = 1;
        while (drink["strIngredient" + i]) {
          const ingredientUsed = drink["strMeasure" + i];
          // console.log(ingredientUsed);
          const ingredientMeasurement = drink["strIngredient" + i];
        
          ingredientsAndMeasures.push(ingredientUsed + " " + ingredientMeasurement);
          i++;
          //  console.log(ingredientsAndMeasures);
        }
   
        return ingredientsAndMeasures;
     }
    
     getIngredientsMeasurements();
      
  return (
    <div className={`article-wrap ${mode}`}>
      {recipes.map((drink) => (
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
                {ingredientsAndMeasures.map((ingr) => (
                  <li className="left line weig">
                   {ingr}
                  </li>
                ))}
           
              </div>
            </div>
            <p className="left weig">
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

 