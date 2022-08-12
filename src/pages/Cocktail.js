import React from 'react'

//custom hook
import { useFetch } from "../hooks/useFetch";
import { useTheme } from "../hooks/useTheme";

//component
import Liquor from "../components/Liquor";
import ThemeSelector from '../components/ThemeSelector';


export default function Cocktail() {
     const url =
       "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
     const { data, loading, error } = useFetch(url);
      
  const {mode}= useTheme()
  return (
    <div className={`container ${mode}`}>
      <ThemeSelector/>
      {error && <p>error...</p>}
      {loading && <p>Loading</p>}
      {data && <Liquor data={data}/>}
     
    </div>
  );
}
