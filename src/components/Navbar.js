//router import
import { Link } from "react-router-dom";

//import hook
import { useTheme } from "../hooks/useTheme";

//component import
import SearchBar from "./SearchBar";

export default function Navbar() {

  const { color } = useTheme()


  return (
    <>
      <nav style={{ backgroundColor: color }}>
        <h1>
          {" "}
          <Link to="/" className="title">
            Apéritif
          </Link>
        </h1>

        <SearchBar />
      </nav>
    </>
  );
}
