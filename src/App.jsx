import { useState, useEffect } from 'react'
import { BrowserRouter } from "react-router-dom"
import RoutesIndex from "../src/Routes/RoutesIndex"
import Navbar from "./components/Navbar/Navbar"


const App = () => {
  return (

    <>
      <BrowserRouter>
      <Navbar/>
        <RoutesIndex />
      </BrowserRouter>

    </>




  )
}

export default App