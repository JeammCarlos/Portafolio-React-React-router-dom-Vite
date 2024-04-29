import { useState, useEffect } from 'react'
import { BrowserRouter } from "react-router-dom"
import RoutesIndex from "../src/Routes/RoutesIndex"
import Navbar from "../src/components/Navbar/Navbar"
import Giphy from "../src/pages/Giphy"


function App() {
  return (
    <>
      <BrowserRouter>
        <RoutesIndex />
        <Navbar/>
      </BrowserRouter>
    </>

  )
}

export default App