import React,{Fragment} from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/WhatIDo/Skills";
import Button from "./components/ButtonToTop/Button";
import Contact from "./components/Contact/Contact";
import Work from "./components/Work/MyWork";

function App() {
  return (
    <Fragment>
     <Header />
     <About />
     <Skills />
     <Work />
     <Contact />
     <Button />
      </Fragment>
  );
}

export default App;
