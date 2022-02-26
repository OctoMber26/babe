import React,{Fragment, useEffect} from "react";
import laptop from "../images/laptop.webp";
import photoshop from "../images/photoshop.png";
import illustrator from "../images/illustrator.png";
import adobe from "../images/adobe.png";
import office from "../images/office.png";
import cut_pro from "../images/cut-pro.png";
import vegas from "../images/vegas.png";
import premiere from "../images/premiere.png";
import movie from "../images/movie.png";
import "./Skills.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Skills=()=>{
    useEffect(()=>{
        Aos.init({duration:2000})
    })
    return(
        <Fragment>
            <section id="section_skills">
         <div className="skills">
             <div className="skills_icon">
              <img className="laptop" src={laptop} />
              <ul data-aos="zoom-in-left" className="list">
                  <li ><img className="photoshop" src={photoshop} /></li>
                  <li ><img className="illustrator" src={illustrator} /></li>
                  <li ><img className="adobe" src={adobe} /></li>
                  <li ><img className="office" src={office} /></li>
                  <li ><img className="cut_pro" src={cut_pro} /></li>
                  <li ><img className="vegas" src={vegas} /></li>
                  <li ><img className="premiere" src={premiere} /></li>
                  <li ><img className="movie" src={movie} /></li>
              </ul>
             </div>
             <div className="skills_description">
                 <h3 data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" className="help">I can help you with:</h3>
                 <ul data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" className="help_list">
                     <li className="domain">Design</li>
                     <li className="domain_description">Manipulate and edit pictures, create amazing designs for book covers, websites and brands</li>
                     <li className="domain">Video</li>
                     <li className="domain_description">Adjust, edit, crop and add effects on videos, create short ads for companies, create trailers for books or movies</li>
                     <li className="domain">Business</li>
                     <li className="domain_description">Create, edit and prepare documents for print in Word, copywriting, writing articles and more business work in Excel</li>
                 </ul>
             </div>
         </div>
         </section>
        </Fragment>
    )
}

export default Skills;