import React,{Fragment, useEffect} from "react";
import logo from "../images/babe-logo.png";
import lk from "../images/lk.png";
import instagram from "../images/instagram.png";
import youtube from "../images/youtube.png";
import "./Contact.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact=()=>{
    useEffect(()=>{
        Aos.init({duration: 2000})
        }, [])

    return(
        <Fragment>
            <section id="contact">
        <div className="contact">
            <img className="contact_logo" src={logo} />
            <h3 className="contact_info">You can contact me by clicking the icons bellow</h3>
            <a  className="contact_link"  href="https://www.linkedin.com/in/antonia-popescu-0a9678216/" target="_blank"><img className="lk" src={lk} /></a>
            <a  className="contact_link"  href="https://www.instagram.com/lenahills_author/" target="_blank"><img className="instagram" src={instagram} /> </a>
            <a  className="contact_link"  href="https://youtube.com/channel/UCPhTXH14L_MOQBOP1HzYIhw" target="_blank"><img className="youtube" src={youtube} /> </a>
        </div> 
        </section>
        </Fragment>
    )
}

export default Contact;
