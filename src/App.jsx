import { useState, useEffect } from 'react'
import { BrowserRouter } from "react-router-dom"
import RoutesIndex from "../src/Routes/RoutesIndex"



function App() {
  return (

    <>
      <BrowserRouter>
      <RoutesIndex/>
     
      </BrowserRouter>

    </>




  )
}

export default App