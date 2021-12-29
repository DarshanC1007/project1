import React from "react";
import {
  BrowserRouter, Routes,
  Route
} from "react-router-dom";

import {HomePage} from "./pages/HomePage";
import {AboutUs} from "./pages/AboutUs";

// import {NavBar} from "./components/NavBar"

function App() {
  return (
    <BrowserRouter>
    {/* <NavBar /> */}
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>     
        <Route exact path="/aboutus" element={<AboutUs />} />    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
