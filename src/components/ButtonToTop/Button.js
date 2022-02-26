import React,{Fragment} from "react";
import { useEffect, useState } from "react";
import "./Button.css";
import arrow from "../images/up-arrow.png";

const Button=()=>{
    const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 10) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

    return(
        <Fragment>
          <div className="container">
         {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <img className="img-fluid" src={arrow} />
        </button>
      )}
      </div>
        </Fragment>
    )
}

export default Button;