import { useState, useEffect } from 'react'
import { BrowserRouter } from "react-router-dom"
import RoutesIndex from "../src/Routes/RoutesIndex"
import Navbar from "./components/Navbar/Navbar"
import Giphy from "../src/pages/Giphy"
import InfoPersonal from "../src/pages/AboutMe"
import Home from "../src/pages/Home"
import InfoAdicional from "../src/pages/Skills"
import Experience from './pages/Experience'


function App() {
  return (

    <>
      <BrowserRouter>
        <RoutesIndex>
        <Navbar/>
        <Home />
        <InfoPersonal />
        <Experience />
        <InfoAdicional />
        <Giphy />
        </RoutesIndex>
      </BrowserRouter>
    </>




  )
}

export default App