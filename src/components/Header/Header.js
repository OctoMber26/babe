import React,{Fragment,useEffect} from "react";
import logo from "../images/babe-logo.png";
import "./Header.css";
import menu from "../images/menu-logo.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Header=()=>{
    useEffect(()=>{
        Aos.init({duration: 2000})
        }, [])

    return(
        <Fragment>
          <div className="container-flui p-10">
        <nav  className="navbar navbar-expand-lg">
  <div data-aos="fade-down" className="container-fluid">
    <img className="logo" src={logo} alt="logo"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"><img className="menu-logo" src={menu} /></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end gx-5 px-4" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#section_about">About Me</a>
        <a className="nav-link" href="#section_skills">What I do?</a>
        <a className="nav-link" href="#work">My work</a>
        <a className="nav-link" href="#contact">Contact Me</a>
      </div>
    </div>
  </div>
</nav>
</div>
</Fragment>
    )
}

export default Header;