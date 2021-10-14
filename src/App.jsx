import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import PopBooks from "./components/popbooks/popbooks";
import SlideBooks from "./components/slidebooks/slidebooks";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <SlideBooks />
      <PopBooks />
    </div>
  );
}

export default App;
