
import { useState } from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import { useTheme } from "./hooks/useTheme";

import Cocktail from "./pages/Cocktail";
import Receipes from "./pages/Receipes";
import Search from "./pages/Search";



function App() {
const {color}= useTheme()
const [showBtn,setShowBtn] = useState(false)
useEffect(()=>{
window.addEventListener("scroll",()=>{
  if (window.scrollY >400) {
    setShowBtn(true)
  } else {
  setShowBtn(false)  
  }
})
},[])


  const srol = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    console.log(document.doctype.scrollTop > 20);
  };
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar style={{ backgroundColor: color }} />
        {showBtn && (
          <button className="scroll" onClick={srol}>
            scroll
          </button>
        )}

        <Routes>
          <Route path="/" element={<Cocktail />} />
          <Route path="/cocktails/:id" element={<Receipes />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
