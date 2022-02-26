import React, {Fragment ,useEffect} from "react";
import me from "../images/babe.jpg";
import "./About.css";
import books from "../images/carti-header.png";
import Aos from "aos";
import "aos/dist/aos.css";

const About=()=>{
    useEffect(()=>{
        Aos.init({duration:2000})
    })

return(
    <Fragment>
        <section id="section_about">
        <div className="about">
            <div data-aos="fade-up" className="image">
               <img className="me" src={me} />
            </div>
            <div  className="description">
                <p data-aos="fade-up" className="about_me">Hi! I'm Lena, an ambitious published author and graphic designer enthusiast in my sparetime.</p>
                <img data-aos="fade-up" className="books" src={books} />
            </div>
        </div>
        </section>
    </Fragment>
)
}

export default About;