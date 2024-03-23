import React from 'react';
import { Link } from 'react-router-dom'; 
import { AiFillLinkedin,AiFillMail } from 'react-icons/ai'
import { BsTwitter, BsInstagram} from 'react-icons/bs'
import { BiLogoFacebook } from 'react-icons/bi'
import {IoLocationSharp,IoCallSharp} from 'react-icons/io5'
function Footer() {
  return (
    <div className="">
      <footer className="text-white text-center text-lg-start bg-dark">
        <div className="container p-4">
          <div className="row mt-4">
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">About company</h5>

              <p>
              Welcome to the Online Shopping<br/> place, where you can find <br/>all the natural products <br/> at a single place.<br/> We are more than just a website; 
              </p>

              <div className="mt-4">
                {/* Facebook */}
                <button className="border-0 btn btn-lg btn-light m-1"><BiLogoFacebook /></button>
                {/* Dribbble */}
                <button className="btn border-0 btn-light btn-lg m-1"><BsTwitter /></button>
                {/* Twitter */}
                <button className="btn border-0 btn-light btn-lg m-1"><BsInstagram /></button>
                {/* Google + */}
                <button className="btn border-0 btn-light btn-lg m-1"><AiFillLinkedin /></button>
                {/* Linkedin */}
              </div>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              
              <ul className="fa-ul" style={{ marginLeft: '1.65em' }}>
                <li className="mb-3">
                  <span className="fa-li"><IoLocationSharp/></span><span className="ms-2">Hyderabad , Telanagana ,India</span>
                </li>
                <li className="mb-3">
                  <span className="fa-li"><AiFillMail/></span><span className="ms-2">freshearthfinds@gmail.com</span>
                </li>
                <li className="mb-3">
                  <span className="fa-li"><IoCallSharp/></span><span className="ms-2">+9194823456788</span>
                </li>
              </ul>
            </div>
            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Useful links
              </h6>
              <p>
                <Link className="text-white" to="/Loginadmin">ADMIN</Link>
              </p>
              <p>
                <Link className="text-white" to="/Profile">Your Account</Link>
              </p>
              <p>
                <Link className="text-white" to="/CAllCenter">Help</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2020 Copyright
          
        </div>
      </footer>
    </div>
  );
}

export default Footer;
