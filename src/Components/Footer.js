import React from 'react';
import {FaFacebookF, FaTwitter,FaPinterestP} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AiFillInstagram} from "react-icons/ai";
import logo2 from '../images/logo2.png';





function Footer() {
    return (
        <>
            <footer class="footer-section p-20">
  
    
                <div class="footer-top pt-150 background-img-2">
                
                  
                    <div class="footer-bottom border-gray-light">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 col-md-12  text-lg-start text-center ">
                                    <div class="copyright-wrap small-text">
                                        <p class="mb-0 text-white">© Plate Inc., All rights reserved</p>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12  text-lg-end text-center">
                                
                                    <div class="terms-policy-wrap text-lg-right text-md-right text-left flex-wrap d-flex justify-content-lg-end justify-content-center align-items-center">
                                        <ul class="list-inline text-right mb-0 pe-2">
                                            <li class="list-inline-item"><Link class="small-text" to="/privacy">Privacy Policy</Link></li>
                                            <li class="list-inline-item"><Link class="small-text" to="/termsofuse">Terms Of USe</Link></li>
                                        </ul>
                                        <div class="social-list-wrap">
                                            <ul class="social-list list-inline list-unstyled text-start mb-0">
                                                <li class="list-inline-item">
                                                {/* <a href="#" target="_blank" title="Facebook"><span
                                                        class="ti-facebook"></span></a> */}
                                                        <FaFacebookF size = '18px'/>
                                                </li>
                                                <li class="list-inline-item">
                                                {/* <a href="#" target="_blank" title="Twitter"><span
                                                        class="ti-twitter"></span></a> */}
                                                        <FaTwitter size = '20px'/>

                                                        </li>
                                                <li class="list-inline-item">
                                                {/* <a href="#" target="_blank"
                                                                                title="Instagram"><span class="ti-instagram"></span></a> */}
                                                                <AiFillInstagram size = '20px'/>              
                                                                                </li>
                                                <li class="list-inline-item">
                                                {/* <a href="#" target="_blank"
                                                                                title="printerst"><span class="ti-pinterest"></span></a> */}
                                                                                <FaPinterestP size = '20px'/>
                                                                                </li>
                                            </ul>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
