import React,{useEffect,useState} from 'react';
import AOS from 'aos';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, FormControl,Accordion ,Spinner} from 'react-bootstrap';
// import { Button } from 'react-bootstrap'
import logo from '../images/logo.png';
import playstore from '../images/playstore.png';
import appstore from '../images/apple.png';
import friedegg from '../images/fried-egg.png';
// import friedegg from './images/fried-eggs.png';
import img1 from '../images/image1.png';
import img2 from '../images/image2.png';
import img3 from '../images/image3.png';
import img5 from '../images/image5.png';
import img7 from '../images/image7.png';
import img8 from '../images/image8.png';
import img9 from '../images/image9.png';
import menu from '../images/menu.png';
import phone1 from '../images/leftphone.png';
import phone2 from '../images/rightphone.png';
import i1 from '../images/img1.png';
import i2 from '../images/img2.png';
import i3 from '../images/img3.png';
import i4 from '../images/img4.png';
import i5 from '../images/img5.png';
import i6 from '../images/img6.png';
import i7 from '../images/img7.png';
import i8 from '../images/img8.png';
import sideimg1 from '../images/sec1.png';
import sideimg2 from '../images/sec2.png';
import sideimg3 from '../images/sec3.png';
import sideimg4 from '../images/sec4.png';
import serveImg from '../images/serve.png';

import health from '../images/health.png'
import Footer from './Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from './../utils/common';

function Plate() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false)
    useEffect(() => {
        AOS.init({
          disable: 'mobile',
        });
        window.scrollTo(0, 0)
      }, []);

      const emailValidation = () => {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!email || regex.test(email) === false){
          setError('Email is not valid')
            return false;
        }
        return true
      }
      const handleEvent = (e) => {
        setEmail(e.target.value);
      }
      const HandleEmailSend = async() => {
        if(emailValidation()){
          
          setError(error);
          setLoading(true);
          try{
            const res  = await axios.post(BASE_URL + 'mail', { 
              "email": `${email}`,
            })
            console.log('res: ', res);
            setEmail('');
            setError('');
            setLoading(false)
          }
          catch (e){
            setError('Something went wrong.Please try again...')
          }
          
        }
        
       
      }
    return (
        <>
            <section className="firstsection container-fluid p-80 text-center position-relative">
                <div className="headerblock">
                    <Link to="/"><img src={logo} alt="logo"/></Link>
                    <h1>Plate</h1>
                    <h2 class="title">Discover incredible food in your community!</h2>
                    <p className="txt" ><span>Plate</span> is a food marketplace app where you can find mouth watering homemade food near you.</p>
                    <h4>
                    Order your favorite<br/> food now!
                    </h4>
                    <div className="store-btn">
                    <Link to={{
                      pathname:'https://play.google.com/store/apps/details?id=com.share.your.love.with.food.plate.app'
                    }} target="_blank">
                      <button class="btn btn-playstore me-2"> 
                          <img src={playstore} alt="playstore"/>
                          <div className="d-flex justify-content-start align-items-center flex-column">
                          <span class="text-left text-uppercase">Get it on</span>
                          <h6 class="font-weight-light">Google Play</h6>
                          </div>
                          
                      </button>
                    </Link>
                    
                    <Link to={{pathname: 'https://apps.apple.com/us/app/plate-the-food-marketplace/id1521387763'}} target='_blank'>
                    <button class="btn btn-playstore"> 
                        <img src={appstore} alt="playstore"/>
                        <div className="d-flex justify-content-start align-items-center flex-column">
                        <span class="text-left text-uppercase">Download on the</span>
                        <h6 class="font-weight-light">App Store</h6>
                        </div>
                        
                    </button>
                    </Link>
                    </div>
                    <p>Are you the next Bobby Flay or Julia Childs? Make an extra plate or two and make some extra dough (yes pun very much intended)
                    </p>
                    <InputGroup className="mb-3 searchbox">

                    <FormControl
                        placeholder="Enter your email"
                        aria-label="Enter your email"
                        aria-describedby="basic-addon2"
                        value={email}
                        type="email"
                        required
                        onChange={handleEvent}
                    />
                    <Button variant="outline-secondary" id="button-addon2" onClick={HandleEmailSend} type="submit">
                        Join community {loading && <Spinner animation="border" variant="light" size="sm"  /> }
                        {/* {loading && <Spinner animation="border" variant="primary" />}  */}
                    </Button>
                    </InputGroup> 
                    { error ? <span className="text-danger">{error}</span> : null}
                    

                </div>
                <img src={img8} alt="img8" className="img8"/>
                <img src={img3} alt="img3" className="img3" />
                <img src={img2} alt="img2" className="img2" />
                <img src={img9} alt="img9" className="img9" />
                <img src={img5} alt="img5" className="img5"/>
                <img src={img7} alt="img7" className="img7" />
                <img src={img1} alt="img1" className="img1" />
                <img src={friedegg} alt="friedegg" className="friedegg"/>
                </section>

    <section className="secondsection p-80 position-relative text-center">
      <div className="container-fluid">
        <div className="title-block">
          <h2 className="title">Find mouth watering homemade food near you!</h2>
          <p className="txt"><span>Plate</span> is a food marketplace app where you can find mouth watering homemade food near you.</p>
        </div>
        <div className="row">
          <div className="col-md-4 mx-auto">
              <div className="img-block">
                <img src={menu} alt="menu" className="centerimg"/>
                <img src={phone1} alt="phone1" className="leftphone"/>
                <img src={phone2} alt="phone2" className="rightphone"/>
              </div>
          </div>
        </div>
      </div>
        <img src={i1} alt="img1" className="img1"/>
        <img src={i2} alt="img2" className="img2"/>
        <img src={i3} alt="img3" className="img3"/>
        <img src={i4} alt="img4" className="img4"/>
        <img src={i5} alt="img5" className="img5" data-aos={"zoom-in"} data-aos-duration={"3000"}/>

        <img src={i6} alt="img6" className="img6" data-aos={"fade-up-left"} data-aos-duration={"2000"} />
        <img src={i7} alt="img7" className="img7" data-aos={"fade-right"} data-aos-duration={"3000"}/>
        <img src={i8} alt="img8" className="img8" data-aos={"fade-right"} data-aos-duration={"3000"}/>
    </section>
    

    <section className="thirdsection p-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos={"fade-up-right"}  data-aos-duration={"3000"} >
            <div class="text-container">
                  <h2 className="title">Order your favorite food from different cuisines!</h2>
                  <p>Find food from different food types and food cuisines and regions such as Italian, American, Chinese, Japanese etc.  You can also find your desirable food from searching it easily, we make sure that you get what you want according to your mood!</p>
              </div>
          </div>
          <div className="col-lg-6 text-center" data-aos={"fade-up-left"}  data-aos-duration={"2000"}>
            <div class="image-container">
                <img class="img-fluid" src={sideimg1} alt="sideimg" className="sideimg"/>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section className="forthsection p-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 text-center" data-aos={"fade-up-right"}  data-aos-duration={"3000"}>
            <div class="image-container">
                <img class="img-fluid" src={sideimg2} alt="sideimg" className="sideimg"/>
            </div>
          </div>
          <div className="col-lg-6"  data-aos={"fade-up-left"}  data-aos-duration={"3000"}>
            <div class="text-container">
                  <h2 className="title">Sell your food with ease</h2>
                  <p>Add the food you want to sell and make money from it, Plate provides multiple options to add food as per your convinience.</p>
              </div>
          </div>
          
        </div>
      </div>
    </section>

    <section className="fifthsection p-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-6"  data-aos={"fade-up-right"}  data-aos-duration={"3000"}>
            <div class="text-container">
                  <h2 className="title">Seamless checkout and payments!</h2>
                  <p>Plate provides multiple payment options as per your need to make sure we complience with user needs, We make sure that payment is robust and 3d secure.</p>
              </div>
          </div>
          <div className="col-lg-6 text-center"  data-aos={"fade-up-left"}  data-aos-duration={"3000"}>
            <div class="image-container">
                <img class="img-fluid" src={sideimg3} alt="sideimg" className="sideimg"/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="sixthsection p-80">
      <div className="container">
        <div className="row">
            <div className="col-lg-6 text-center" data-aos={"fade-up-right"}  data-aos-duration={"2000"}>
                <div class="image-container">
                    <img class="img-fluid" src={sideimg4} alt="sideimg" className="sideimg"/>
                </div>
            </div>
            <div className="col-lg-6" data-aos={"fade-up-left"}  data-aos-duration={"3000"} >
                <div class="text-container">
                    <h2 className="title">Chat with buyers or sellers directly!</h2>
                    <p>Plate provides easy one to one chat with buyers and seller in order to make the food ordering process flawless. Plate gives full control to their user by being transparent in all the situations with buyers and sellers.</p>
                </div>
            </div>
         
        </div>
      </div>
    </section>

    
   

 
    <section id="we-serve" class="we-serve block block-full-image">
      
      <img src={serveImg} alt="img" className="img-fluid" style={{width:'100%'}}/>
    </section>
  
    <section className="faq-section p-80 overflow-hidden">
      <div class="container">
          <div class="row justify-content-center">
              <div class="col-md-9 col-lg-8" >
                  <div class="section-heading text-center mb-5">
                      <h2 className="title">Frequently Asked Queries</h2>
                      <p>Efficiently productivate reliable paradigms before ubiquitous models. Continually utilize frictionless expertise whereas tactical relationships. Still have questions? Contact us</p>
                  </div>
              </div>
          </div>
          <div class="row align-items-center">
              <div class="col-md-12 col-lg-6 mb-5 mb-md-5 mb-sm-5 mb-lg-0" data-aos={"fade-right"}  data-aos-duration={"3000"}>
                  <div class="img-wrap">
                      <img src={health} alt="download" class="img-fluid"/>
                  </div>
              </div>
              <div class="col-md-12 col-lg-6" data-aos={"fade-left"}  data-aos-duration={"3000"}>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>What can we sell on the app?</Accordion.Header>
                  <Accordion.Body>
                  Plate is a food marketplace app that lets you sell food that you personally make. So you can basically sell any food items you want. Made too much spaghetti? List a plate! Got extra burgers? Sell a plate! Too many tacos(is that even a thing?)? Sell a plate!
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Do we need a food handler’s permit?</Accordion.Header>
                  <Accordion.Body>
                  While Plate is only a platform for a food marketplace, we suggest following local and state guidelines for food safety. Each state and locality may have different guidelines, so check with them if there’s anything you may need.
                  We trust our community does business safely and handles food with care.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Is the food delivered or for pick up?</Accordion.Header>
                  <Accordion.Body>
                  It depends on the listing of the seller. They may have it listed for pick up or delivery.
                  </Accordion.Body>
                </Accordion.Item>
                
              </Accordion>

              
              </div>
          </div>
      </div>
    </section>
  
   
   
    <section id="contact" class="contact-us p-80 overflow-hidden">
        <div class="container">
            <div class="row">
                <div class="col-12 pb-3 message-box d-none">
                    <div class="alert alert-danger"></div>
                </div>
                <div class="col-md-5" data-aos={"fade-up-right"}  data-aos-duration={"3000"}>
                    <div class="section-heading">
                        <h2 className="title">Contact With Us</h2>
                        <p>It's very easy to get in touch with us. Just use the contact form or pay us a
                            visit for a coffee at the office. Dynamically innovate competitive technology after an
                            expanded array of leadership.</p>
                    </div>
                    <div class="footer-address">
                        {/* <h6><strong>Head Office</strong></h6> */}
                        {/* <p>121 King St, Melbourne VIC 3000, Australia</p> */}
                        {/* <ul>
                            <li><span>Phone: +61 2 8376 6284</span></li>
                            <li><span>Email : <a href="mailto:hello@yourdomain.com">hello@yourdomain.com</a></span>
                            </li>
                        </ul> */}
                    </div>
                </div>
                <div class="col-md-7" data-aos={"fade-up-left"}  data-aos-duration={"3000"}>
                    <form action="#" method="POST" id="contactForm" class="contact-us-form" novalidate="novalidate">
                        <h5>Reach us quickly</h5>
                        <div class="row">
                            <div class="col-sm-6 col-12">
                                <div class="form-group">
                                    <input type="text" class="form-control" name="name" id="name" placeholder="Enter name"
                                            required="required"/>
                                </div>
                            </div>
                            <div class="col-sm-6 col-12">
                                <div class="form-group">
                                    <input type="email" class="form-control" name="email" id="email" placeholder="Enter email"
                                            required="required"/>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6 col-12">
                                <div class="form-group">
                                    <input type="text" name="phone"  class="form-control" id="phone"
                                            placeholder="Your Phone" />
                                </div>
                            </div>
                            <div class="col-sm-6 col-12">
                                <div class="form-group">
                                    <input type="text" name="company" size="40" class="form-control"
                                            id="company" placeholder="Your Company"/>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="form-group">
                                    <textarea name="message" id="message" class="form-control" rows="7" cols="25"
                                                placeholder="Message"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 mt-3">
                                <button type="submit" class="btn btn-submit" id="btnContactUs">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                    <p class="form-message"></p>
                </div>
            </div>
        </div>
    </section>
        <Footer/>
    

        </>
    )
}

export default Plate
