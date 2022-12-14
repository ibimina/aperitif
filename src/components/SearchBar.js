import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SearchBar() {

  const [term, setTerm] = useState("");
  
  const navigate = useNavigate();
 
  const handle = (e) => {
    e.preventDefault();
   setTerm("")
    navigate(`/search?q=${term}`);
  };

  return (
    <form onSubmit={handle}>
      <input
        type="text"
        placeholder="search for new reciepe"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        required
      />
    </form>
  );
}
