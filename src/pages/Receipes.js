//id and page navigation
import { useParams, useNavigate } from "react-router-dom";

import { useEffect } from "react";

//hook
import { useFetch } from "../hooks/useFetch";

//component
import Article from "../components/Article";
export default function Receipes() {
  const { id } = useParams();
  const nav = useNavigate();
  const url = "https://www.thecocktaildb.com/api/json/v1/1//lookup.php?i=" + id;
  const { data, loading, error } = useFetch(url);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        nav("/");
      }, 1000);
    }
  }, [error,nav]);

  return (
    <>
      {/* {error && <p>error...</p>} */}
      {loading && <p>Loading</p>}
      {data && <Article recipes={data} />}
    </>
  );
}
