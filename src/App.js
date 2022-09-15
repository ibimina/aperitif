
import { useState } from "react";
import { useEffect } from "react";

//import routes from react dom
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";


//import custom hook
import { useTheme } from "./hooks/useTheme";

//import component
import Cocktail from "./pages/Cocktail";
import Receipes from "./pages/Receipes";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";

function App() {

const {color}= useTheme()
const [showBtn,setShowBtn] = useState(false)

//function to display scroll button 
useEffect(()=>{
window.addEventListener("scroll",()=>{
  if (window.scrollY > 400) {
    setShowBtn(true)
  } else {
  setShowBtn(false)  
  }
})
},[])

//function to scroll page to the top
  const srol = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  
  };
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar style={{ backgroundColor: color }} />
        {showBtn && (
          <button className="scroll bg" onClick={srol}>
            <span className="sr-only">scroll up</span>
          </button>
        )}

        <Routes>
          <Route path="/" element={<Cocktail />} />
          <Route path="/cocktails/:id" element={<Receipes />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<Cocktail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
