import { useState } from 'react'
import './App.css'
import Navbar from "../navbar/Navbar"
import Homepage from "../homepage/Homepage"

function App() {
  const [shoppingCartCounter, setShopingCartCounter] = useState(0)
  return (
    <>
      <Navbar shoppingCartCounter={shoppingCartCounter} />
      <Homepage />
    </>
    
  )
}

export default App
