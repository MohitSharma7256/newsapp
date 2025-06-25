import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {
  

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='' element={<Home />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App



// my news api
//api->   6ae0be66976943ac9fa7c3b235ad6414
