import {useLocation} from "react-router-dom"

import { useFetch } from "../hooks/useFetch";

 import Liquor from "../components/Liquor";
import ThemeSelector from "../components/ThemeSelector";
import { useTheme } from "../hooks/useTheme";

export default function Search() {

//get the search input value from input element  
const queryString = useLocation().search
const queryParams = new URLSearchParams(queryString)
const query = queryParams.get("q")

const url =  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + query;
const { data, loading, error } = useFetch(url);

const {mode}=useTheme()
return (
  <div className={`container ${mode} bg`}>
    <ThemeSelector />
    {error && <p className="error">error...</p>}
    {loading && <p className="loading">Loading...</p>}
    {data && <Liquor data={data} />}
  </div>
);
}
