import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { hydrate, render } from "react-dom";

import { Home } from './pages';

const App = (
  <React.StrictMode>
    <BrowserRouter>
      <Routes>   
        <Route path="/" exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(App, rootElement);
} else {
  render(App, rootElement);
}


 