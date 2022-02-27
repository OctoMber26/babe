import React,{Fragment, useState, useEffect} from "react";
import "./Work.css";
import Aos from "aos";
import "aos/dist/aos.css";
import cover_1 from "../images/cover-1.jpg";
import cover_2 from "../images/cover-2.jpg";
import cover_3 from "../images/cover-3.jpg";
import cover_4 from "../images/cover-4.jpg";
import cover_5 from "../images/cover-5.jpg";
import cover_6 from "../images/cover-6.jpg";
import illustration1 from "../images/illustration1.jpg";
import illustration2 from "../images/illustration2.jpg";
import illustration3 from "../images/illustration3.jpg";
import logo1 from "../images/logo1.jpg";
import logo2 from "../images/logo2.jpg";
import logo3 from "../images/logo3.jpg";
import logo4 from "../images/logo4.jpg";
import logo5 from "../images/logo5.jpg";


const Work=()=>{
    useEffect(()=>{
        Aos.init({duration: 2000})
        }, [])

    const[photoshop, SetPhotoshop]=useState(false)
    const ShowPhotoshop=()=>{
        SetPhotoshop(true)
    }

    const[illustrations, SetIllustrations]=useState(false)
    const ShowIllustrations=()=>{
        SetIllustrations(true)
    }

    const[logos, SetLogos]=useState(false)
    const ShowLogos=()=>{
        SetLogos(true)
    }

    return(
        <Fragment>
        <div id="work" className="container text-center">
            <h3 className="post-heading display-4 p-5 work_title">Press on a section bellow to see a bit of my Work</h3>
        <div className="container-fluid mb-5">
            <div className="row mb-5">
                <div onClick={ShowPhotoshop} className="col-lg-5 text-start col-md-7 col-sm-12  photoshop_section">
                   <p>Photoshop</p>
                </div>
                {photoshop && <div data-aos="fade-down" className="col-lg-7 mx-auto col-md-7 col-sm-12">
                   <img src={cover_1} className="img-fluid" />
                   <img src={cover_2} className="img-fluid" />
                   <img src={cover_3} className="img-fluid" />
                   <img src={cover_4} className="img-fluid" />
                   <img src={cover_5} className="img-fluid" />
                   <img src={cover_6} className="img-fluid" />
                </div>}
            </div>
            <div className="row mb-5">
            <div onClick={ShowIllustrations} className="col-lg-5 text-end col-md-7 col-sm-12 illustrations_section ml-5">
                   <p>Illustrations</p>
                </div>
                 {illustrations && <div data-aos="fade-down" className="col-lg-7 col-md-7 col-sm-12">
                   <img src={illustration1} className="img-fluid illustration_img" />
                   <img src={illustration2} className="img-fluid illustration_img" />
                   <img src={illustration3} className="img-fluid illustration_img" />
                </div>}
            </div>
            <div className="row">
            <div onClick={ShowLogos} className="col-lg-5 text-center col-md-7 col-sm-12 logos_section ml-5">
                   <p>Logos</p>
                </div>
                  {logos && <div data-aos="fade-down" className="col-lg-7 col-md-7 col-sm-12">
                   <img src={logo1} className="img-fluid logo_img" />
                   <img src={logo2} className="img-fluid logo_img" />
                   <img src={logo3} className="img-fluid logo_img" />
                   <img src={logo4} className="img-fluid logo_img" />
                   <img src={logo5} className="img-fluid logo_img" />
                </div>}
            </div>
        </div>
            </div>
        </Fragment>
    )
}

export default Work;
