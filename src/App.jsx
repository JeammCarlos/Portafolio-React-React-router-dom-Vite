import { useState, useEffect } from 'react'
import { BrowserRouter } from "react-router-dom"
import RoutesIndex from "../src/Routes/RoutesIndex"
import Navbar from "../src/components/Navbar/Navbar"
import Giphy from "../src/pages/Giphy"
import InfoPersonal from "../src/pages/AboutMe"
import Home from "../src/pages/Home"
import InfoAdicional from "../src/pages/Skills"


function App() {
  return (

    <>
      <BrowserRouter>
        {/* <RoutesIndex /> Diplica la vista de index. Revisarlo */}
        <Navbar/>
        <Home/>
        <InfoPersonal/>
        <InfoAdicional/>
        <Giphy/>
      </BrowserRouter>
    </>
    
      
    

  )
}

export default App