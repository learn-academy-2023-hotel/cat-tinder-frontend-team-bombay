import React, { useEffect, useState } from "react"
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

const App = () => {
  const [cats, setCats] = useState([])

  useEffect(() => {readCats()}, [])

  const readCats = () => {
    fetch("http://localhost:3000/cats")
      .then((response) => response.json())
      .then((payload) => {setCats(payload)})
      .catch((error) => console.log(error))
  }

  const createKitty = (createdKitty) => {
    fetch("http://localhost:3000/cats", {
      body: JSON.stringify(createdKitty),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then(() => readCats())
      .catch((error) => console.log("Create error(s): ", error))
  }
  const updateCat = (currentCat, id) => {
    fetch(`http://localhost:3000/cats/${id}`,{
      body: JSON.stringify(currentCat),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
    .then((response) => response.json())
    .then(() => readCats())
    .catch((error) => console.log("Update error(s): ", error))
  }

  const deleteCat = (id) => {
    fetch(`http://localhost:3000/cats/${id}`,{
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then((response) => response.json())
    .then(() => readCats())
    .catch((error) => console.log("Delete error(s): ", error))
  }
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catindex" element={<CatIndex cats={cats} />} />
      <Route path="/catshow/:id" element={<CatShow cats={cats} deleteCat={deleteCat}/>} />
      <Route path="/catnew" element={<CatNew createKitty={createKitty}/>} />
      <Route path="/catedit/:id" element={<CatEdit cats={cats} updateCat={updateCat}/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    
    
    <Footer />
    </>
  ) 
}

export default App;
