import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './container/Homepage/homepage'
import { Navbar ,Footer } from './container/index'
// import SDLCphases from './container/SDLC Phases/SDLCphases'


function App() {

  return (
    <>
     <Navbar />
     <Router>
      <Routes>
        {/* Set up individual routes using Route */}
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/Home" element={<Homepage />} /> */}
         {/* <Route path="/SDLC phases" element={<SDlCphases />} /> */}
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
