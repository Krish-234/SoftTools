import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Homepage, SDLCphases } from './container/main'
import { Navbar ,Footer } from './container/index'

import './App.css'

function App() {

  return (
    <>
     <Navbar />
     <Router>
      <Routes>
        {/* Set up individual routes using Route */}
        <Route path="/" element={<Homepage />} />
        <Route path="/Home" element={<Homepage />} />
         <Route path="/Phases" element={<SDLCphases />} />
        {/*<Route path="/contact" element={<Contact />} /> */}
        {/* Handle 404 - Not Found */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
     <Footer />
    </>
  )
}

export default App
