import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import './App.css'
import Header from "./components/Header"
import Footer from "./components/Footer"
import CatEdit from "./pages/CatEdit"
import CatIndex from "./pages/CatIndex"
import CatShow from "./pages/CatShow"
import CatNew from "./pages/CatNew"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import mockCats from "./mockCats"

const App = () => {
  const [cats, setCats] = useState(mockCats)

  const createKitty = (kitty) => {
    console.log('created cat', kitty)

  }
  const updateCat = (cat, id) => {
    console.log("cat:", cat)
    console.log("id", id)
  }

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catindex" element={<CatIndex cats={cats} />} />
      <Route path="/catshow/:id" element={<CatShow cats={cats}/>} />
      <Route path="/catnew" element={<CatNew createKitty={createKitty}/>} />
      <Route path="/catedit/:id" element={<CatEdit cats={cats} updateCat={updateCat}/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    
    
    <Footer />
    </>
  ) 
}

export default App;
