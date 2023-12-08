import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CatEdit from "./Pages/CatEdit";
import CatIndex from "./Pages/CatIndex";
import CatShow from "./Pages/CatShow";
import CatNew from "./Pages/CatNew";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound"

import mockCats from "./mockCats"

const App = () => {
  const [cats, setCats] = useState(mockCats)
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catindex" element={<CatIndex />} />
      <Route path="/catshow" element={<CatShow />} />
      <Route path="/catnew" element={<CatNew />} />
      <Route path="/catedit" element={<CatEdit />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    
    
    <Footer />
    </>
  ) 
}

export default App;
