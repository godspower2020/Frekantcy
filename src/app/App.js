import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home, About } from '../pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>   
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App