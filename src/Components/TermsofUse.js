import React,{useEffect} from 'react';
import logo from '../images/logo.png';
import img1 from '../images/image1.png';
import img2 from '../images/image2.png';
import img3 from '../images/image3.png';
// import img5 from '../images/image5.png';
import img7 from '../images/image7.png';
import img8 from '../images/image8.png';
// import img9 from '../images/image9.png';
import friedegg from '../images/fried-egg.png';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function TermsofUse() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <>  
             <section className="firstsection privacy-section container-fluid p-80 text-center position-relative">
                <div className="headerblock">
                    <Link to="/"><img src={logo} alt="logo"/></Link>
                    <h1 className="text-center">Plate.</h1>
                    <h2 class="title">TERMS OF SERVICE</h2>
                    

                
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
                            <h1 className="pb-2 txt-red ">1. CONTRACTUAL RELATIONSHIP</h1>
                            <p>These Terms of Service ("Terms") govern your access or use of the applications, content, products, and services (the "Services," as more fully defined below in Section 3) made available by Plate, its representatives, affiliates, officers and directors (collectively, "Plate"). 
                                PLEASE READ THESE TERMS CAREFULLY, AS THEY CONSTITUTE A LEGAL AGREEMENT BETWEEN YOU AND PLATE. 
                            </p>
                            <p>By accessing or using the Services, you confirm your agreement to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Services. These Terms expressly supersede prior agreements or arrangements with you. Plate may immediately terminate these Terms or any Services with respect to you, or generally, cease offering or deny access to the Services or any portion thereof, at any time for any reason.</p>
                            <p>Plate reserve the right, at our sole discretion, to change or modify portions of these Terms at any time without further notice. You should periodically visit this page to review the current Terms so you are aware of any revision to which you are bound. If we do this, we will post the changes to these Terms on this page and will indicate at the top of this page the date these terms were last revised. We may also notify you, either through the Services user interface, in an email notification or through other reasonable means. </p>
                            <p>Any such changes will become effective for existing users no earlier than ten (10) days after they are posted, except that changes addressing new functions of the Services or changes made for legal reasons will be effective immediately. Your continued use of the Service after the date any such changes become effective constitutes your acceptance of the new Terms. If you do not agree to abide by these or any future Terms, do not use or access (or continue to use or access) the Service.</p>
                        </div>

                        <div className="mb-5">
                            <h1 className="pb-2 txt-red ">2. THE SERVICES</h1>
                            <p>The Plate Service provides an online peer-to-peer marketplace that allows users to make and sell home-made food with other users in close proximity and who wished to purchase them. Plate does not supply or sell food and/or services on, or via, the App. Additionally, we do not physically handle any food and/or Services displayed on the App. </p>
                            <p>Users who purchase Items through the Service are "Buyers," and users who list and sell food through the Service are "Sellers." A user may be both a Buyer and Seller. All purchases are made directly (and any contract for purchase and sale is) between the Buyer and Seller; Plate is not a party to the sales process. The Service includes pricing and listing assistance but not buying or selling. We may also help facilitate the resolution of disputes between our Buyers and Sellers, but, Plate has no control over and does not guarantee </p>
                            <p>(a) the existence, quality, safety, authenticity of food advertised on the Service; </p>
                            <p>(b) the truth or accuracy of Sellers’ content or listings on the Service; </p>
                            <p>(c) the ability of Sellers to sell items through the Service and ship Items within required shipping windows; </p>
                            <p>(d) the ability of Buyers to pay for items purchased through the Service; or </p>
                            <p>(e) that a Buyer or Seller will actually complete a transaction, effectuate trouble-free delivery and shipping.</p>
                            <p>Any information on the App or otherwise provided to Users is supplied in good faith but we do not guarantee its accuracy or completeness. You agree that it is your responsibility to make enquiries as to the accuracy or completeness of any information</p>
                        </div>

                        <div className="mb-5">
                            <h1 className="pb-2 txt-red ">3. OWNERSHIP</h1>
                            <p>The Service and all rights therein are and shall remain Plate's property or the property of Plate's licensors. Neither these Terms nor your use of the Services conveys or grant to you any rights: </p>
                            <ol type="i">
                                <li>in or related to the Services except for the limited license granted below; or </li>
                                <li>to use or reference in any manner Plate's company names, logos, product and service names, trademarks or services marks.</li>

                                
                            </ol>
                        </div>

                        <div className="mb-5">
                            <h1 className="pb-2 txt-red ">4. LICENSE</h1>
                            <p>Subject to your compliance with the terms outlined herein, Plate grants you a limited, non-exclusive, non-sublicensable, revocable, non-transferable license to: </p>
                            <ol type="i">
                                <li>access and use the Applications on your personal device solely in connection with your use of the Services; and </li>
                                <li>access and use any content, information and related materials that may be made available through the Services, in each case solely for your personal, noncommercial use. Any rights not expressly granted herein are reserved by Plate.</li>
                               
                            </ol>
                        </div>
                       
                    
                        <div className="mb-5">
                            <h1 className="pb-2 txt-red ">5. THIRD-PARTY SERVICES AND CONTENT</h1>
                            <p>The Services may be made available or accessed using third party services and content (including advertising) that Plate does not control. You acknowledge that different terms of use and privacy policies may apply to your use of such third party services and content. Plate does not endorse such third party services and content and in no event shall Plate be responsible or liable for any products or services of such third party providers.  We will not be responsible for the accuracy, availability or relaiabilty of any information, data, content, opinion or statement made available in connection with such third party services. As such, Plate shall not liable for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such third party service. Plate enables these features merely as a convenience and the inclusion of such features does not imply an endorsement or recommendation.</p>

                        </div>
                    
                        <div className="mb-5">
                            <h1 className="pb-2 txt-red ">6. RESTRICTIONS</h1>
                            <p>While making use of the service, You may not: (i) remove any copyright, trademark or other proprietary notices from any portion of the Services; (ii) reproduce, modify, prepare derivative works based upon, distribute, license, lease, sell, resell, transfer, publicly display, publicly perform, transmit, stream, broadcast or otherwise exploit the Services except as expressly permitted by Plate; (iii) decompile, reverse engineer or disassemble the Services except as may be permitted by applicable law; (iv) link to, mirror or frame any portion of the Services; (v) cause or launch any programs or scripts for the purpose of scraping, indexing, surveying, or otherwise data mining any portion of the Services or unduly burdening or hindering the operation and/or functionality of any aspect of the Services; or (vi) attempt to gain unauthorized access to or impair any aspect of the Services or its related systems or networks.</p>
                            
                        </div>

                        <div className="mb-5">
                            <h1 className="pb-2 txt-red ">7. ACCESS AND USE OF THE PLATE SERVICE</h1>
                            <ol type="I"> 
                                <li><strong>Eligibility: </strong> The service is not available for use by persons under the age of 18. Only users who are eighteen (18) years of age or older are allowed to register and make use of the Plate service. If you do not meet this criteria, please do not use the service. Additionally, Plate reserves the right to refuse access to, or use of the Service to anyone, and may terminate any account, at any time, in its sole discretion. You are only authorized to create and use one account for the Service and are prohibited from using alter egos or other disguised identities when using the Service.</li>
                                <li><strong>User account, password and security: </strong> In order to use most parts of the Plate Service, you must register for and maintain an active personal account (“Account”). Account registration requires that you submit to Plate certain information such as your name, email address and location. You agree to maintain accurate, complete and uptodate information in your account. You are responsible for maintaining the confidentiality of your password and account, if any, and are fully responsible for any and all activities that occur under your password or account. You agree to (a) immediately notify Plate of any unauthorized use of your password or account or any other breach of security, and (b) ensure that you exit from your account at the end of each session when accessing the Service. Plate will not be liable for any loss or damage arising from your failure to comply with this Section.</li>
                                <li><strong>User Requirements and Conduct: </strong> User are solely responsible for all pictures and description of items, information, text, graphics, video, messages or other material (“Content”) that you upload, post, display, publish or otherwise transmit via the service, and for all item that you sell or purchase via the service.</li>
                            

                                <p>You must ensure that your access to, and use of, the Services is not illegal or otherwise prohibited by laws that apply in your jurisdiction.</p>
                                <p>The following are examples of the kind of items, content and/or use that is illegal or prohibited by Plate. Plate reserves the right to investigate and take appropriate legal action against anyone who, in Plate's sole discretion, violates this provision, including without limitation, removing the offending items or content from the Service, suspending or terminating the account of such violators and reporting you to the law enforcement authorities. You agree to not use the Service to sell, post or otherwise transmit any item or content that:</p>

                                <ol type="i"> 
                                    <li>is unlawful, harmful, threatening, abusive, harassing, tortious, excessively violent, defamatory, vulgar, obscene, pornographic, libelous, invasive of another‘s privacy, hateful racially, ethnically or otherwise objectionable;</li>
                                    <li>you do not have a right to sell or transmit under any law or under contractual or fiduciary relationships; </li>
                                    <li>poses or creates a privacy or security risk to any person; </li>
                                    <li>infringes any intellectual property or other proprietary rights of any party;</li>
                                    <li>constitutes unsolicited or unauthorized advertising, promotional materials, commercial activities and/or sales, "junk mail," "spam," "chain letters," "pyramid schemes," "contests," "sweepstakes," or any other form of solicitation; </li>
                                    <li>contains software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer software or hardware or telecommunications equipment; or</li>
                                    <li>in the sole judgment of Plate, is objectionable or which restricts or inhibits any other person from using or enjoying the Service, or which may expose Plate or its users to any harm or liability of any type;</li>
                                
                                </ol>

                                <li><strong>User-Provided Content:  </strong> Plate may, in Plate's sole discretion, permit you from time to time to submit, upload, publish or otherwise make available to Plate through the Services textual, audio, and/or visual content and information, including commentary and feedback related to the Services, initiation of support requests, and submission of entries for competitions and promotions ("User Content"). Any User Content provided by you remains your property. However, by providing User Content to Plate, you grant Plate a worldwide, perpetual, irrevocable, transferable, royalty-free license, with the right to sublicense, to use, copy, modify, create derivative works of, distribute, publicly display, publicly perform, and otherwise exploit in any manner such User Content in all formats and distribution channels now known or hereafter devised (including in connection with the Services and Plate's business and on third-party sites and services), without further notice to or consent from you, and without the requirement of payment to you or any other person or entity.
                                   <br/><br/> <p>You represent and warrant that: (i) you either are the sole and exclusive owner of all User Content or you have all rights, licenses, consents and releases necessary to grant Plate the license to the User Content as set forth above; and (ii) neither the User Content, nor your submission, uploading, publishing or otherwise making available of such User Content, nor Plate's use of the User Content as permitted herein will infringe, misappropriate or violate a third party's intellectual property or proprietary rights, or rights of publicity or privacy, or result in the violation of any applicable law or regulation.</p>
                                    You agree to not provide User Content that is defamatory, libelous, hateful, violent, obscene, pornographic, unlawful, or otherwise offensive, as determined by Plate in its sole discretion, whether or not such material may be protected by law. Plate may, but shall not be obligated to, review, monitor, or remove User Content, at Plate's sole discretion and at any time and for any reason, without notice to you.
                                </li>

                            </ol>

                        </div>

                         
                        <div className="mb-5">
                            <h1 className="pb-2 txt-red ">8. INTELLECTUAL PROPERTY RIGHTS</h1>
                            <p><strong>Service Content, Software and Trademarks: </strong>You acknowledge and agree that the Service may contain images and descriptions of fashion items and other content (collectively, "Service Content") that is protected by copyright, patent, trademark, trade secret or other proprietary rights and laws. Except as expressly authorized by Plate, you agree not to modify, copy, frame, scrape, rent, lease, loan, sell, distribute or create derivative works based on the Service or the Service Content, in whole or in part, except that the foregoing does not apply to your own User Content (as defined below) that you legally upload to the Service.</p>
                            <p>In connection with your use of the Service you shall not engage in or use any data mining, robots, scraping or similar data gathering or extraction methods. Any use of the Service or the Service Content other than as specifically authorized herein is strictly prohibited. The technology underlying the Service (including the Software distributed in connection therewith) is the property of Plate. You agree not to copy, modify, create a derivative work of, reverse engineer, reverse assemble or otherwise attempt to discover any source code, sell, assign, sublicense, or otherwise transfer any right in the Service (including the Software). Any rights not expressly granted herein are reserved by Plate.</p>
                            <p>The Plate name and logos are trademarks and service marks of Plate (collectively the "Plate Trademarks"). Other company, product, and service names and logos used and displayed via the Service may be trademarks or service marks of their respective owners who may or may not endorse or be affiliated with or connected to Plate. Nothing in these Terms or the Service should be construed as granting, by implication, estoppel, or otherwise, any license or right to use any of Plate Trademarks displayed on the Service, without our prior written permission in each instance. All goodwill generated from the use of Plate Trademarks will inure to our exclusive benefit.
                            </p>
                            
                        </div>
                        <div className="mb-5">
                            <h1 className="pb-2 txt-red ">9. PLATE FEES AND PRICING</h1>
                            <p>The Plate platform is free to download and use; however, it may contain payable services that may be made available by Plate from time to time. For instance, we may offer advertisement options for listings on the platform.</p>
                            <p>All prices displayed on the Marketplace are subject to change and may be subject to the decision of the seller.</p>
                            <p>All prices listed on the Marketplace are in U.S. Dollars and exclusive of any applicable taxes unless otherwise specified.</p>
                            <p>The Plate app reserves the right to change any and all applicable fees on the app. </p>
                        </div>

                        <div className="mb-5">
                            <h1 className="pb-2 txt-red ">10. PURCHASES AND SALES TRANSACTIONS</h1>
                            <p>A registered user may communicate with Seller via the App for the purchase of listed items and/or services. For the avoidance of doubt, all purchases and/or payments made pursuant to any agreement which utilises the Services are between you and the Seller to the exclusion of Plate.</p>
                            <p>You are responsible for checking any applicable allergen information relating to items that you purchase via the App with Sellers directly.</p>
                            <ul style={{listStyle:'none'}}>
                                <li><strong>(a)	Taxes: </strong>It is your responsibility to determine what, if any, taxes apply to each transaction you complete via the Service, including, for example, sales, use, value-added, and similar taxes. It is also your responsibility to withhold, collect, report and remit the correct taxes to the appropriate tax authorities. We are not responsible for withholding, collecting, reporting, or remitting any sales, use, value-added, or similar tax arising from any transaction you complete via the Service.</li>
                                <li><strong>(b)	Marketplace Risk: </strong>
                                Plate is not affiliated with or endorsed by any seller of the items made available through the Service: Plate is a marketplace and is not involved in any transaction between Buyers and Sellers, does not obtain title to any purchased items and does not act as a Buyer, Seller (or affiliate for a Buyer or Seller) or broker with respect to any transactions. There are risks that you assume when dealing with other users (including those who may be acting under false pretenses) and all of these risks are borne by you, and not Plate. We encourage you to use the various functionalities of the Service (e.g., our Item commenting system, and our direct messaging platform) to help evaluate the user with whom you are dealing.
                                <br/><br/>
                                Plate does not control the behavior of users of the Service or the information or User Content (defined below) provided by other users. As a result, Plate does not guarantee or endorse the authenticity, quality, safety, or legality of any items offered or sold, the truth or accuracy of any listings, or the ability of Sellers to sell Items or of Buyers to buy Items. We cannot assure that all transactions will be completed. Additionally, Plate does not guarantee the ability or intent of users to fulfill their obligations in any transactions. Plate reserves the right to delay the completion of any transaction for a reasonable period of time for purposes of fraud detection and otherwise protecting Plate and its users from illegal or wrongful activities or other violations of these Terms.
                                <br/><br/>
                                FOR EVERY TRANSACTION THAT IS COMMENCED THROUGH THE SERVICE, YOU MUST MAKE YOUR OWN INDEPENDENT DETERMINATION REGARDING THE STATEMENTS, ITEM DESCRIPTIONS OR THE SELLER’S REPRESENTATIONS AND THE BUYER’S ABILITY TO PAY FOR OR DELIVER THE ITEM(S) OFFERED. PLEASE USE CAUTION, COMMON SENSE, AND PRACTICE SAFE TRADING WHEN DEALING WITH OTHER USERS OR OTHERWISE USING THE SERVICE. YOU ARE SOLELY RESPONSIBLE FOR AND ASSUME ALL RISK RELATED TO, SELLING AND BUYING USING THE PLATE SERVICES (INCLUDING ALL ONLINE AND OFFLINE INTERACTIONS WITH OTHER USERS).
                                </li>
                                <li><strong>(c)	Sellers: </strong> You must have the right to sell the items that you make available for sale through the Service. You must describe your item (including the original price) and all terms of sale in your listing truthfully, accurately and completely.</li>
                                <li><strong>(d)	Buyers: </strong>You are responsible for reading the full item listing before making an offer. When you make an offer and your offer is accepted by the Seller, you have a contract with the Seller.</li>
                                <li><strong>(e)	Purchase: </strong> Buyers may offer to purchase Items from Sellers. Once an offer is accepted by Seller, the sale transaction is binding on both Seller and Buyer, and no returns, refunds, cancellations or retractions are allowed, except as permitted by the seller. Once the offer is accepted by Seller, Buyer must pay the purchase price and shipping costs (if applicable) for the Item through the Service. After doing so, Buyer’s obligations are complete, unless Buyer requests a permitted return. </li>
                            </ul>
                            <p>Notwithstanding the foregoing, a Buyer may cancel an order for an item within 30 minutes of purchasing that Item.</p>
                        </div>

                        <div className="mb-5">
                            <h1 className="pb-2 txt-red ">11. ELECTRONIC COMMUNICATIONS</h1>
                            <p>When you use the Service or send e-mails to us, you are communicating with us electronically. We will communicate with you by e-mail or providing notices via the Service.
You agree that all agreements, notices, disclosures and other communications that we
provide to you electronically satisfy any legal requirement that such communications be in
writing. Any such emails may include marketing and promotional content.</p>   
                        </div>
                        
                        <div className="mb-5">
                            <h1 className="pb-2 txt-red ">12. TERMINATION</h1>
                            <p>In addition to our rights herein to terminate your rights to use this service if you do meet our eligibility criteria, we may, at our absolute discretion, terminate these Terms or cease to supply you with access to the App and/or the Services for any reason and without notice at Plate’s sole discretion, if: (i) it transpires that you have provided false or misleading information on the App; (ii) you are found by us to be offensive or abusive to a Seller or other User; (iii) violate any policy or guideline applicable to the Plate Service or Materials, or (iv) misuse any part of the service by introducing viruses, trojans or other material that is malicious or technologically harmful.</p>
                        </div>

                        <div className="mb-5">
                            <h1 className="pb-2 txt-red ">13. INDEPENDENT RELATIONSHIP</h1>
                            <p>You acknowledge and agree that you and Plate are not entering into an employment agreement, joint venture, partnership, or other relationship which gives rise to any rights and obligations other than those explicitly laid out in these Terms, and nothing in these Terms shall be construed as creating such a relationship between you and Plate. You and Plate are also not entering into an agency agreement. You and Plate are acting on an independent, basis. You may not incur any obligations on behalf of Plate, you may not bind Plate, and you may not hold yourself out as representing Plate in any capacity or manner.</p>
                        </div>


                        <div className="mb-5">
                            <h1 className="pb-2 txt-red ">14. DISCLAIMER OF WARRANTIES</h1>
                            {/* <p>We are continually improving and adding to the features and functionality of this App and the Services we offer to you. As a result of these changes (or changes to the law), we may need to revise or update this Privacy Policy. Accordingly, we reserve the right to update or modify this Policy at any time, and we will display at least one (1) week prior notice of the change on the app. Your continued use of this App after we have posted the revised Privacy Policy constitutes your agreement to be bound by the revised Privacy Policy. However, we will honor the terms that were in effect when we gathered Personal Information from you.</p> */}
                            <ul style={{listStyle:'none'}}>
                                <li>(a)	YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK. THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS.TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAWS, PLATE EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED OR STATUTORY, INCLUDING, BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT AND YOU WAIVE ALL WARRANTIES OF ANY KIND AS STATED HEREIN.</li>
                                <li>(b)	WITHOUT LIMITING THE ABOVE, TO THE FULLEST EXTENT PERMITTED BY LAW, PLATE MAKES NO WARRANTY THAT (I) YOU WILL BE ABLE TO SELL OR PURCHASE ANY ITEMS THROUGH THE SERVICE OR THAT THE SERVICE WILL OTHERWISE MEET YOUR REQUIREMENTS OR EXPECTATIONS, (II) THE SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, (III) THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE SERVICE WILL BE ACCURATE OR RELIABLE, OR (IV) THE QUALITY OF ANY GOODS, SERVICES, INFORMATION, OR OTHER MATERIAL PURCHASED OR OBTAINED BY YOU THROUGH THE SERVICE WILL MEET YOUR EXPECTATIONS.</li>
                                <li>(c)	YOUR USE OF THE SERVICES IS DONE VOLUNTARILY AND AT YOUR SOLE RISK. YOU ACKNOWLEDGE THAT SOME INTERACTIONS THROUGH OR RELATED TO THE SERVICES MAY CARRY INHERENT RISK, AND BY USING THE SERVICES, YOU CHOOSE TO ASSUME THOSE RISKS VOLUNTARILY AND KNOWINGLY. FOR EXAMPLE, THE MEALS PREPARED AND SOLD TO A NEIGHBOR MAY CARRY RISK OF ILLNESS, BODILY INJURY, OR DEATH, OR THE SELLER AND/OR NEIGHBORS YOU INTERACT WITH MAY VIOLATE YOUR RIGHTS, AND YOU FREELY AND WILLFULLY ASSUME THOSE RISKS BY CHOOSING TO USE THE SERVICES. YOU ASSUME FULL RESPONSIBILITY FOR THE CHOICES YOU MAKE BEFORE, DURING, AND AFTER YOUR USE OF THE SERVICES. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, YOU AGREE TO RELEASE AND HOLD HARMLESS PLATE FROM ALL LIABILITIES AND CLAIMS THAT ARISE IN ANY WAY FROM ANY INJURY, DEATH, LOSS OR HARM IN ANY WAY RELATED TO YOUR USE OF THE SERVICES.</li>
                            </ul>
                        </div>


                        <div className="mb-5">
                            <h1 className="pb-2 txt-red ">15. LIMITATION OF LIABILITY</h1>
                            <p>TO THE EXTENT PERMITTED BY LAW, WE WILL NOT BE LIABLE FOR ANY LOSS, EXPENSES, LIABILITIES, COSTS OR DAMAGE CAUSED BY VIRUSES, SYSTEM FAILURES OR OTHER TECHNOLOGICALLY HARMFUL MATERIAL THAT MAY INFECT YOUR COMPUTER EQUIPMENT, PROGRAMS, DATA OR OTHER MATERIAL DUE TO YOUR USE OF ANY PART OF THE APP OR DOWNLOADING OF ANY MATERIAL POSTED ON IT OR ON ANY APP LINKED TO IT. WE RECOMMEND USERS ENSURE THEY HAVE UP-TO-DATE VIRUS CHECKING SOFTWARE INSTALLED.</p>
                            <p>TO THE EXTENT PERMITTED BY LAW, WE ARE NOT RESPONSIBLE FOR DEALING WITH, AND NOT LIABLE FOR, ANY DISPUTES OR COMPLAINTS MADE BY YOU IN RELATION TO THE SERVICES PROVIDED TO YOU, OR ADVERTISED, VIA THE APP (INCLUDING ANY DISPUTE OR COMPLAINT REGARDING REFUNDS, PAYMENT OR SERVICES). YOU SHOULD ADDRESS SUCH COMPLAINTS DIRECTLY WITH THE SELLER.</p>
                            <p>YOU AGREE THAT WE WILL NOT BE LIABLE FOR ANY INDIRECT, CONSEQUENTIAL, SPECIAL OR EXEMPLARY LOSSES, EXPENSES OR LIABILITIES, OR LOSS OF PROFITS, LOSS OF REVENUE, ECONOMIC LOSS, LOSS OF GOODWILL, CORRUPTION OR ALTERATION OF DATA, FAILURE TO REALISE ANTICIPATED SAVINGS, LOSS OF OPPORTUNITY, EXPECTATION LOSS OR LOSS OF PRODUCTION, ARISING OUT OF, OR IN CONNECTION WITH, THE PROVISION OR USE OF THE SERVICES, THE MARKETPLACE, THE APP OR THESE TERMS.
                            YOU AGREE THAT, IN ANY EVENT, OUR MAXIMUM AGGREGATE LIABILITY TO YOU UNDER THESE TERMS WILL BE NO MORE THAN $100.
                            </p>
                            <p>THE USER ACKNOWLEDGES AND AGREES THAT THE LIMITATIONS OF LIABILITY CONTAINED IN THIS CLAUSE ARE A FAIR AND REASONABLE ALLOCATION OF THE COMMERCIAL RISK BETWEEN THE PARTIES.
                            THIS CLAUSE/SECTION SURVIVES TERMINATION OR EXPIRY OF THESE TERMS.
                            </p>
                        </div>


                        <div className="mb-5">
                            <h1 className="pb-2 txt-red ">16. INDEMNITY</h1>
                            <p>To the fullest extent permitted by law, you agree that you waive, release, discharge and relinquish any and all claims that you have now or may have against us which are connected with, arise out of, relate to or are incidental to the provision of the App and your use of the Services. You indemnify us, and hold us harmless, from and against any and all claims, loss, damage, taxes, liabilities and/or expenses that may be incurred by us arising out of, or in connection with, your use of the App, the Services and any breach by you of these Terms.
                            You agree and acknowledge that we will not be liable or responsible for any loss or damage suffered by any Seller/User due to your actions, and you indemnify us from and against any and all claims by any Seller/User in relation to your actions (including content created and posted by you).
                            <br/>This clause/section survives termination or expiry of these Terms.</p>
                        </div>


                        <div className="mb-5">
                            <h1 className="pb-2 txt-red ">17.UNAVOIDABLE EVENTS</h1>
                            <p>We will not be liable to you if we are prevented from, or delayed in, providing the Services due to acts, events, omissions or accidents beyond our reasonable control (“Unavoidable Events”). Where an Unavoidable Event occurs, we will attempt to recommence the provision of the Services as soon as reasonably practicable.</p>
                        </div>


                        <div className="mb-5">
                            <h1 className="pb-2 txt-red ">18. No Refunds: </h1>
                            <p>Charges made paid between seller and buyer are final and non-refundable. Plate App has no obligation to provide refunds or credits, but may grant them, in each case in Plate App’s sole discretion.</p>
                        </div>

                        <div className="mb-5">
                            <h1 className="pb-2 txt-red ">19. ARBITRATION AGREEMENT AND DISPUTE RESOLUTION: </h1>
                            <p>By agreeing to these terms. You agree that you are required to resolve any claim that you may have against Plate through arbitration.</p>
                            <ol type="i">
                                <li><strong>Mandatory Arbitration of Disputes: </strong> You and Plate agree that any dispute, claim or controversy arising out of or relating to (a) these Terms or the existence, breach, termination, enforcement, interpretation or validity thereof, or (b) your access to or use of the Services at any time, whether before or after the date you agreed to the Terms, will be settled by binding arbitration between you and Plate, and not in a court of law. Notwithstanding the foregoing, where you allege claims of sexual assault or sexual harassment occurring in connection with your use of the Services, you may elect to bring those claims in a court of competent jurisdiction instead of arbitration. Plate agrees to honor your election of forum with respect to your individual sexual assault or sexual harassment claim but in so doing does not waive the enforceability of this Arbitration Agreement as to any other provision (including, but not limited to, the waivers provided in the following paragraph, which will continue to apply in court and arbitration), controversy, claim or dispute.
                                    <br/>
                                    You acknowledge and agree that you and Plate are each waiving the right to a trial by jury or to participate as a plaintiff or class member in any purported class action or representative proceeding. Unless both you and Plate otherwise agree in writing, any arbitration will be conducted only on an individual basis and not in a class, collective, consolidated, or representative proceeding. However, you and Plate each retain the right to bring an individual action in small claims court and the right to seek injunctive or other equitable relief in a court of competent jurisdiction to prevent the actual or threatened infringement, misappropriation or violation of a party's copyrights, trademarks, trade secrets, patents or other intellectual property rights.
                                </li> 
                                <li><strong>Arbitration Rules and Governing Law: </strong> 
                                : The arbitration will be administered by the American Arbitration Association ("AAA") in accordance with the AAA’s Consumer Arbitration Rules and the Supplementary Procedures for Consumer-Related Disputes (the "AAA Rules") then in effect, except as modified by this Arbitration Agreement. The AAA Rules are available at www.adr.org or by calling the AAA at 1-800-778-7879.<br/>The parties agree that the arbitrator ("Arbitrator"), and not any federal, state, or local court or agency, shall have exclusive authority to resolve any disputes relating to the interpretation, applicability, enforceability or formation of this Arbitration Agreement, including any claim that all or any part of this Arbitration Agreement is void or voidable. The Arbitrator shall also be responsible for determining all threshold arbitrability issues, including issues relating to whether the Terms are unconscionable or illusory and any defense to arbitration, including waiver, delay, laches, or estoppel.
                                Notwithstanding any choice of law or other provision in the Terms, the parties agree and acknowledge that this Arbitration Agreement evidences a transaction involving interstate commerce and that the Federal Arbitration Act, 9 U.S.C. § 1 et seq. ("FAA"), will govern its interpretation and enforcement and proceedings pursuant thereto. It is the intent of the parties that the FAA and AAA Rules shall preempt all state laws to the fullest extent permitted by law. If the FAA and AAA Rules are found to not apply to any issue that arises under this Arbitration Agreement or the enforcement thereof, then that issue shall be resolved under the laws of the state of California.

                                </li> 
                                <li><strong>Arbitrator’s Decision: </strong>The Arbitrator will render an award within the time frame specified in the AAA Rules. Judgment on the arbitration award may be entered in any court having competent jurisdiction to do so. The Arbitrator may award declaratory or injunctive relief only in favor of the claimant and only to the extent necessary to provide relief warranted by the claimant's individual claim. An Arbitrator’s decision shall be final and binding on all parties. An Arbitrator’s decision and judgment thereon shall have no precedential or collateral estoppel effect. If you prevail in arbitration you will be entitled to an award of attorneys' fees and expenses, to the extent provided under applicable law. Plate will not seek, and hereby waives all rights Plate may have under applicable law to recover attorneys' fees and expenses if Plate prevails in arbitration.</li> 
                                <li><strong>Arbitration Fees: </strong> Payment of all filing, administration and arbitrator fees will be governed by the AAA Rules. We will pay for all filing, administration and arbitrator fees and expenses if your Dispute is for less than $5,000, unless the arbitrator finds your Dispute frivolous. If we prevail in arbitration we will pay all of our attorneys’ fees and costs and won’t seek to recover them from you. If you prevail in arbitration you will be entitled to an award of attorneys’ fees and expenses to the extent provided under applicable law.</li> 
                               <li><strong>Changes: </strong> Notwithstanding the provisions of section 1 above, if Plate changes any of the terms of this Section “Arbitration Agreement and Dispute Resolution” after the date you first accepted these Terms (or accepted any subsequent changes to these Terms), you may reject any such change by sending us written notice (including by email to <a href="mailto:dev.plateapp@gmail.com">dev.plateapp@gmail.com</a> ) within 30 days of the date such change became effective, or in the date of Plate’s email to you notifying you of such change. By rejecting any change, you are agreeing that you will arbitrate any Dispute between you and Plate in accordance with the terms of this Section “Arbitration Agreement and Dispute Resolution” as of the date you first accepted these Terms (or accepted any subsequent changes to these Terms).</li>
                               <li><strong>Severability and Survival: </strong> : If any portion of this Arbitration Agreement is found to be unenforceable or unlawful for any reason, (i) the unenforceable or unlawful provision shall be severed from these Terms; (ii) severance of the unenforceable or unlawful provision shall have no impact whatsoever on the remainder of the Arbitration Agreement or the parties’ ability to compel arbitration of any remaining claims on an individual basis pursuant to the Arbitration Agreement; and (iii) to the extent that any claims must therefore proceed on a class, collective, consolidated, or representative basis, such claims must be litigated in a civil court of competent jurisdiction and not in arbitration, and the parties agree that litigation of those claims shall be stayed pending the outcome of any individual claims in arbitration.</li>
                               
                            </ol>
                        
                        
                        </div>


                        <div className="mb-5">
                            <h1 className="pb-2 txt-red ">20. CHOICE OF LAW</h1>
                            <p>These Terms are governed by and construed in accordance with the laws of the State of California, U.S.A., without giving effect to any conflict of law principles, except as may be otherwise provided in the Arbitration Agreement above or in supplemental terms applicable to your region. However, the choice of law provision regarding the interpretation of these Terms is not intended to create any other substantive right to non-Californians to assert claims under California law whether that be by statute, common law, or otherwise.</p>
                        
                        </div>

                        <div className="mb-5">
                            <h1 className="pb-2 txt-red ">21. ENTIRE AGREEMENT</h1>
                            <p>These Terms constitute the entire agreement between you and Plate. All prior agreements, understandings, and communications, whether written or oral, express or implied, that relate to the matters contemplated herein shall be deemed to be merged herein and superseded hereby.</p>
                            
                        </div>

                        <div className="mb-5">
                            <h1 className="pb-2 txt-red ">22. WAIVER OF RIGHTS</h1>
                            <p>Plate’s failure to enforce any right or provision of these Terms will not be considered a waiver of such right or provision. The waiver of any such right or provision will be effective only if in writing and signed by a duly authorized representative of Plate. Except as expressly set forth in these Terms, the exercise by either party of any of its remedies under these Terms will be without prejudice to its other remedies under these Terms or otherwise.</p>
                            
                        </div>

                        <div className="mb-5">
                            <h1 className="pb-2 txt-red ">23. SEVERABILITY</h1>
                            <p>If any provision of these Terms, shall be held to be invalid or unenforceable for any reason, the remaining provisions shall continue to be valid and enforceable. If a competent tribunal or adjudicator finds that any provision of these Terms is invalid or unenforceable, but that by limiting such provision it would become valid and enforceable, then such provision shall be deemed to be written, construed, and enforced as so limited.</p>
                        </div>

                        <div className="mb-5">
                            <h1 className="pb-2 txt-red ">24. NO ASSIGNMENT</h1>
                            <p>These Terms shall be binding on the parties and their successors and permitted assigns. You shall not assign, transfer, or delegate any of your rights, duties, or obligations under these Terms, or any part thereof, whether by operation of law or otherwise, without our prior written consent, which may be withheld, conditioned or delayed in our sole and absolute discretion. Plate may freely assign these Terms without restriction. Any assignment in violation of this section shall be void.</p>
                            
                        </div>

                       
                    </div>
                </div>
            </section>
        
            
            <Footer/>
        </>
    )
}

export default TermsofUse
