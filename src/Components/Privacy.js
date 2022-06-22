import React,{useEffect} from 'react';
import logo from '../images/logo.png';
import img1 from '../images/image1.png';
import img3 from '../images/image3.png';
import img7 from '../images/image7.png';
import img8 from '../images/image8.png';
import Footer from './Footer';
import { Link } from 'react-router-dom';




function Privacy() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <section className="firstsection privacy-section container-fluid p-80 text-center position-relative">
                <div className="headerblock">
                    <Link to="/"><img src={logo} alt="logo"/></Link>
                    <h1 className="text-center">Plate.</h1>
                    <h2 class="title">PRIVACY POLICY</h2>
                    
                
                </div>
                <img src={img8} alt="img8" className="img8"/>
                <img src={img3} alt="img3" className="img3" />
                {/* <img src={img2} alt="img2" className="img2" /> */}
                {/* <img src={img9} alt="img9" className="img9" /> */}
                {/* <img src={img5} alt="img5" className="img5"/> */}
                <img src={img7} alt="img7" className="img7" />
                <img src={img1} alt="img1" className="img1" />
                {/* <img src={friedegg} alt="friedegg" className="friedegg"/> */}
            </section> 

            <section className="container privacy-section text-center">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="mb-5">
                            <h1 className="pb-2 txt-red ">1. INTRODUCTION</h1>
                            <p>At Plate, protecting your private information is our priority and we are committed to being
                            upfront   about   it.   Plate   respects   the   privacy   needs   and   concerns   of   our   customers.   We
                            appreciate the trust you place in us when you choose to make use of our App and Services
                            and we take that responsibility seriously. This policy (“Privacy Policy”) is to inform you
                            about what kinds of information we collect about you, including personally identifying
                            information, how we use it, with whom it is shared and the choices you have regarding our
                            use of that information.</p>
                            <p>By “personally identifying information”, we mean information that directly identifies you,
                            such as your name, IP address, device ID, telephone number, or email address. In this Policy,
                            “we” and “our” mean Plate, and “you” or “your” mean any person who visits our website. To
                            clarify, the given meaning of “Personal information” under this policy is in addition to the
                            definition provided by the applicable law.</p>
                        </div>

                        <div className="mb-5">
                            <h1 className="pb-2 txt-red ">2. PRIVACY POLICY FOR CHILDREN</h1>
                            <p>We do not intentionally gather Personal Data from users who are under the age of 13. If a
                            user under the age of 13 submits Personal Data to us and we learn that the Personal Data is
                            the information of a user under the age of 13, we will attempt to delete the information as
                            soon as possible. If a parent or guardian becomes aware that his or her child has provided us
                            with information without their consent, he or she should contact us. We will delete such
                            information from our files as soon as reasonably possible.</p>
                            
                        </div>

                        <div className="mb-5">
                            <h1 className="pb-2 txt-red ">3. DATA COLLECTION</h1>
                            <ol type="A">
                                <li><strong>Information You Provide:</strong> </li>
                                <p>“Personal Data"  means any information which, either alone or in combination with
                                other information we hold about you, identifies you as an individual, including, but not
                                limited to your: Name, telephone number, location information, city, email address and
                                username;</p>

                                <li><strong>Automated information collection</strong> </li>
                                <p>We may collect certain information about your use of the App through the use of tracking technologies or by other passive means. This “passively collected” information includes, but is not limited to, the domain name of the website that allowed you to navigate to the Site, search engines used, the internet protocol (IP) address used, the length of time spent on the Site, the pages you looked at on the Site, other websites you visited before and after visiting the Site, the type of internet browser you have, the frequency of your visits to the Site, and other relevant statistics, including the following:</p>
                                <ol type="I">
                                    <li><strong>Log Information: </strong> When you access and make use of the Plate app, our servers automatically record information that your browser sends whenever you visit a website. These server logs may include information such as your web request, IP address, browser type, browser language, the date and time of your request, and one or more cookies (small text files containing a string of characters) that may uniquely identify your browser. </li>
                                    <li><strong>Cookies: </strong> When you log-in to the App or purchase products or services through the App as a Log-In User, we send one or more cookies (small text files containing a string of characters) to your computer that uniquely identifies your browser. We use cookies to improve the quality of the Site by storing user preferences and tracking user trends. Most web browsers accept cookies automatically but can be configured not to do so or to notify the user when a cookie is being sent. If you wish to disable cookies, refer to your browser help menu to learn how to disable cookies.  </li>
                                    <li><strong>Links: </strong> The App may include links in a format that enables us to keep track of whether these links have been followed by IP addresses. We use this information to improve the quality of our products and design.</li>
                                </ol>
                            </ol>
                        </div>

                        <div className="mb-5">
                            <h1 className="pb-2 txt-red ">4. WHAT WE USE YOUR PERSONAL INFORMATION FOR</h1>
                            <p>Generally, we use the information gathered to provide, improve, and develop our App and the Services we provide to you, to communicate with you, to offer you a better service, and to protect us and our users. When you interact with or make use of the Plate service, we use a variety of technologies to process the personal information that we collect about you for various reasons.</p>
                            <ol type="I">
                                <li><strong>Recommendations and Personalization:</strong> Personalize your experience with our products, services and to recommend products, features, and services that we think might be of interest to you. </li>
                                <li><strong>For communication purposes: </strong> We may send emails to the email address you provide to us, push notifications to your mobile device via the Plate App and enabled notifications, and text messages to any cellphone number you provided to us, to verify your account and for informational and operational purposes, such as account management, customer service, system maintenance, and other Service-related purposes. We use personal information that we gather from you to communicate with you in relation to your use of the Plate Service via different channels (e.g., by email, chat, phone). </li>
                                <li><strong>Fraud detection and prevention: </strong> Increase and maintain the safety and security of our products and services and prevent misuse. We use personal information to detect and prevent fraud and abuse in order to protect the security and ensure the safety of our Customers, Plate, and others.
                                    We also use collected information to protect against, identify and prevent fraud and other criminal activity, claims and other liabilities
                                </li>
                                <li><strong>Provide, troubleshoot, and improve Plate Services:</strong> We use your personal information to understand, diagnose, troubleshoot, and fix issues with the Plate Service. We also use such information to operate, evaluate, develop, manage and improve our Service (including operating, administering, analyzing and improving our products and services; developing new products and services; managing and evaluating the effectiveness of our communications; performing accounting, auditing, billing reconciliation and collection activities and other internal functions; </li>
                                <li>To evaluate and develop new features, technologies, and improvements to the Plate Service.</li>
                                <li>To fulfill contractual obligations with third parties, for example, licensing agreements and to take appropriate action with respect to reports of intellectual property infringement and inappropriate content. </li>
                                <li><strong>Comply with and enforce applicable legal requirements: </strong> in certain cases, we collect your personal information to stay in compliance with laws and relevant industry standards and policies, including this Privacy Notice and our Terms and Conditions of use. </li>
                                
                            </ol>
                        </div>
                       
                    
                        <div className="mb-5">
                            <h1 className="pb-2 txt-red ">5. PERSONAL INFORMATION THAT WE SHARE</h1>
                            <p>We do not sell, rent, or otherwise trade personal information collected about you through the Site, from Log-In Users or through Offline Tracking Information collected through the Services to others. The information that you provide to us is an important part of our business and we share your personal information only as described below:</p>

                            <ol type="A">
                                <li><strong>Third-Party Service Providers: </strong> 
                                We may work with third parties in order to make available to you products and services for use on or through Plate or employ other companies and individuals to perform certain functions on our behalf. Such services may include you ordering products from third-party sellers through the Plate platform, tracking, product shipping and delivery, product development and enhancement, marketing, and website usage analytics. We may share personal information or any information collected through the Site with these third parties for the purpose of enabling them to provide these services. We may share Offline Tracking Information with our contractors so that they can link such information to personal information of a particular customer, and aggregate the information on an anonymous basis with similar information for product enhancement.
                                </li>

                                <li><strong>Subsidiaries and Affiliates: </strong> 
                                We may share personal information or any information collected through the Site with our subsidiaries and affiliates for the purposes for which you provided the information or as reasonably necessary for our internal administrative and business purposes.
                                </li>

                                <li><strong>Merger and Acquisition:  </strong> 
                                We may disclose or transfer personal information or any information collected through your usage of our Service to third parties who acquire all or a portion of Plate’ business, whether such acquisition is by way of merger, consolidation, or purchase of all or a portion of our assets, or in connection with any bankruptcy or reorganization proceeding brought by or against us
                                </li>

                                <li><strong>Protection: </strong> We may disclose or transfer personal information or any information collected through the Site and your usage of the Plate Service if we deem it necessary to protect the rights, property, or safety of Plate, our users, or third parties. </li>
                               

                                <li><strong>Breach of Terms:  </strong> We may disclose or transfer personal information or any information collected through the Site and your usage of the Plate Service if we find that you are in breach of its terms and conditions or any policies or usage guidelines for products or services.</li>
                                <li><strong>Compliance with laws:  </strong> We may disclose personal information or any information collected through the Site and your usage of the Plate Service if we are required to do so by law or pursuant to legal process, in response to a request from government officials, law enforcement authorities or a valid subpoena, or as necessary or appropriate in connection with an investigation of illegal activity, including without limitation to prevent, investigate, detect or prosecute any criminal offense or attack. This includes exchanging information with other companies and organizations for fraud protection and credit risk reduction. </li>
                                <li><strong>Consent  </strong>  We may share personal information in accordance with any consent you provide.</li>
                                


                                
                            </ol>
                            <p>Contractors, Vendors or partners of Plate who have access to your personal information in connection with providing services for Plate are required to keep the information confidential and are not permitted to use this information for any other purpose than to carry out the services they are performing for Plate.</p>
                        
                            <p>A User’s personal information will be retained for as long as the User receives the Services, for archiving purposes, and for any period during which there is a dispute between the User and Plate and otherwise in Plate’ sole discretion.</p>
                        </div>
                    
                        <div className="mb-5">
                            <h1 className="pb-2 txt-red ">6. THIRD-PARTY SERVICES AND SITES</h1>
                            <p>Our Services, App may contain links to or the ability for you to access third-party websites, products, and services that are not owned, managed or controlled by Plate, and who may have privacy policies with different standards than those contained in this Privacy Policy. This Privacy Policy applies solely to information collected by us. We encourage you to read the privacy policies of any third parties before using their websites, products, or services.</p>
                            
                        </div>

                        <div className="mb-5">
                            <h1 className="pb-2 txt-red ">7. KEEPING YOUR DATA SAFE</h1>
                            <p>As a matter of policy, we are committed to protecting our users’ personal data. We implement appropriate technical, administrative and organizational measures to help protect the security of your personal data; however, please note that no method of transmission over the Internet, or method of electronic storage, is 100% secure. Although we will do our best to protect the personal data that we gather about you, the transmission of information via the internet is not completely secure and so, we cannot guarantee its absolute security of your data transmitted to the Service; any transmission is at your own risk. We have implemented various policies including encryption, access, and retention policies to guard against unauthorized access and unnecessary retention of personal data in our systems.</p>
                            <p>Your password protects your user account, so we encourage you to use a strong password that is unique to your Plate account, never share your password with anyone, limit access to your App and browser.</p>
                           
                        </div>

                         
                        <div className="mb-5">
                            <h1 className="pb-2 txt-red ">8. DATA RETENTION AND DELETION</h1>
                            <p>We keep your personal data only as long as necessary to provide you with the Plate Service and for legitimate and essential business purposes, such as maintaining the performance of the Plate Service, making data-driven business decisions about new features and offerings, complying with our legal obligations, and resolving disputes. We keep some of your personal data for as long as you are a user of the Plate Service.</p>
                            <p>If you request, we will delete or anonymize your personal data so that it no longer identifies you, unless we are legally allowed or required to maintain certain personal data, including situations such as the following:</p>
                            <ol type="I"> 
                                <li>If there is an unresolved issue relating to your account, such as an outstanding credit on your account or an unresolved claim or dispute we will retain the necessary personal data until the issue is resolved;</li>
                                <li>Where we need to retain the personal data for our legal, tax, audit, and accounting obligations, we will retain the necessary personal data for the period required by applicable law; and/or,</li>
                                <li>Where necessary for our legitimate business interests such as fraud prevention or to maintain the security of our users.</li>
                            </ol>
                        </div>
                        
                        <div className="mb-5">
                            <h1 className="pb-2 txt-red ">9. MOBILE PRIVACY</h1>
                            <p>We may offer you the ability to connect with or use our applications, services, and tools through a mobile device, either through a mobile application or via a mobile-optimized website. The provisions of this Privacy Policy apply to all such mobile access and use of mobile devices. This Privacy Policy will be referenced by all such mobile applications or mobile optimized websites.</p>
                            <p>When you download or use our mobile applications or access one of our mobile-optimized sites, we may use various technologies to determine location, such as location services of the applicable operating system or browser and sensor data from your device. We automatically receive and record information on our server from your browser or mobile platform, including your location, IP address, browser type, operating information, device and application IDs, and cookie information. We will not use any information collected for advertising purposes and we will not provide this information to any third parties for use in the marketing of any product or service to you.</p>
                            
                        </div>

                        <div className="mb-5">
                            <h1 className="pb-2 txt-red ">10. PURPOSES FOR WHICH WE SEEK YOUR CONSENT</h1>
                            <p>We may also ask for your consent to process your personal information for a specific purpose that we communicate to you. When you consent to our processing your personal information for a specified purpose, you may withdraw your consent at any time and we will stop the processing of your data for that purpose.</p>
                            <p>Also, we employ other companies and individuals to perform functions on our behalf. Examples include website hosting and development, sending postal mail and e-mail, removing repetitive information from customer lists, analyzing data, providing marketing assistance, and processing credit card payments. They have access to personal information needed only to perform their functions. We require companies with whom we contract for outsourced services to keep data received from us confidential and to use it only for the purposes indicated.</p>
                            
                        </div>

                        <div className="mb-5">
                            <h1 className="pb-2 txt-red ">11. WHAT RIGHTS AND CHOICES DO YOU HAVE?</h1>
                            <p>In compliance with certain restrictions under national law, as a data subject, you have the right to have access to, make updates, erase and restrict processing of your personal data. If you have any questions or objection as to how we collect and process your personal information, please contact our Customer Service. The Plate Services also include settings that provide you with options as to how your information is being used.</p>
                            <p>You can get a copy of the personal information collected by us if any. You can choose not to provide certain information, but then you might not be able to take advantage of many features of Plate Services.</p>
                            <p>You can add or update certain information by visiting your Plate Account When you update information, we may keep a copy of the previous version for our records.</p>
                            <p>If you don't want to receive e-mail or other communications from us, please see the Managing Your Preference section.</p>
                        </div>
                        
                        <div className="mb-5">
                            <h1 className="pb-2 txt-red ">12. CALIFORNIA CONSUMER PRIVACY ACT</h1>
                            <p>If you’re a California resident, you may have some additional privacy rights. Please read our California Consumer Privacy Act Disclosure for a full description of your rights under California law.</p>
                        </div>

                        <div className="mb-5">
                            <h1 className="pb-2 txt-red ">13. CHANGES TO THIS PRIVACY POLICY</h1>
                            <p>We are continually improving and adding to the features and functionality of this App and the Services we offer to you. As a result of these changes (or changes to the law), we may need to revise or update this Privacy Policy. Accordingly, we reserve the right to update or modify this Policy at any time, and we will display at least one (1) week prior notice of the change on the app. Your continued use of this App after we have posted the revised Privacy Policy constitutes your agreement to be bound by the revised Privacy Policy. However, we will honor the terms that were in effect when we gathered Personal Information from you.</p>
                        </div>

                    </div>
                </div>
            </section>
        

            <Footer/>
        </>
    )
}

export default Privacy
