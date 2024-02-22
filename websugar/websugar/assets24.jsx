import React from "react";
import './assets24.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faChartLine, faIndianRupee,  faLocationDot, faPeopleGroup, faPhone, faSpinner } from "@fortawesome/free-solid-svg-icons";

function Source_1() {
    return (
        <>
            <div>
                <div className="main1">
                    <div class="nav1">
                        <div class="log1">
                            <img src={require("../websugar/img2-removebg-preview.png")} width="150px" height="25vh"></img>
                        </div>
                        <div class="parts">
                            <a href="#" class="h1">Home</a>
                            <a href="#" class="w1">Why us</a>
                            <a href="#" class="i1">How it wroks</a>
                            <a href="#" class="a1">Assets</a>
                            <a href="#" class="o1">About</a>
                            <a href="#" class="b1">Blog</a>
                            <a href="#" class="l1">Login</a>
                        </div>

                    </div>
                    <div class="midcon">
                        <div className="img11"><img src={require('../websugar/istockphoto.jpg')} width="100%" height={400}></img></div>
                        <div class="small">
                            <h1>Assets No 24</h1>
                            <hr className="horizon1"></hr>
                            <p className="t1">TYPE OF PROPERTY: Office Space</p>
                        </div>
                    </div>
                    <div className="feild_set1">
                        <div className="fs1">
                            <p><fieldset>
                                <legend><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>Locatons</legend>
                                Bellendur</fieldset></p>
                        </div>
                        <div className="fs1">
                            <p><fieldset>
                                <legend><FontAwesomeIcon icon={faChartLine}></FontAwesomeIcon>Minimum Investment</legend>
                                25 lakhs</fieldset></p>
                        </div>
                        <div className="fs1">
                            <p><fieldset>
                                <legend><FontAwesomeIcon icon={faIndianRupee}></FontAwesomeIcon>Target IRR</legend>
                                19 %</fieldset></p>
                        </div>
                    </div>
                    <div className="feild_set2">
                        <div className="fs2">
                            <p><fieldset>
                                <legend><FontAwesomeIcon icon={faIndianRupee}></FontAwesomeIcon>Total Bucket</legend>
                                60 crore</fieldset></p>
                        </div>
                        <div className="fs2">
                            <p><fieldset>
                                <legend><FontAwesomeIcon icon={faSpinner}></FontAwesomeIcon>Status</legend>
                                100% Funded(Over Subscribed) </fieldset></p>
                        </div>
                        <div className="fs2">
                            <p><fieldset>
                                <legend><FontAwesomeIcon icon={faPeopleGroup}></FontAwesomeIcon>No of Asset Owners</legend>
                                100</fieldset></p>
                        </div>
                    </div>
                    <div className="msg">
                        <p className="para1">
                        <p className="msg1">ABOUT</p>OMR retail is a high yield commercial space, located in Hoskote. The property Provide a consistent source of earnings by utilizing lease agreements. Commercial property leases typically yield higher rates compared to residential properties, retain tenants for longer durations, and experience fewer instances of vacant units. Consequently, your income stream is expected to generate higher returns than those obtained from stocks.</p>
                    </div>
                </div>
                <div className="main2">
                    <div className="con1">
                        <p><img src={require("../websugar/img2-removebg-preview.png")} width={150} height={50}></img></p>
                        <p className="main2_para2">
                            Experience the sweetest real estate deals, previously<br></br> reserved for India's top 0.1%
                        </p>
                        <hr className="horizon2" width="400vh"></hr>
                        <div className="table1">
                            <div className="trow1">
                                <p><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>7036526615</p>
                            </div>
                            <div className="trow2">
                                <p><FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>7036526615</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="con2">
                        <div>
                            <h3>Quik links</h3>
                            <p><a href="#">Investments</a></p>
                            <p><a href="#">How it works</a></p>
                            <p><a href="#">Missions and visions </a></p>
                        </div>
                        <div>
                            <h3>About us</h3>
                            <p><a href="#">About us</a></p>
                            <p><a href="#">Why us</a></p>
                            <p><a href="#">our team</a></p>
                        </div>
                        <div>
                            <h3>Resources</h3>
                            <p><a href="#">FAQ</a></p>
                            <p><a href="#">Contact Us</a></p>
                            <p><a href="#">Privacy Policy </a></p>
                        </div>
                        <div className="con2_social">
                            <h3>Follow us</h3>
                            <p><a href="Facebook"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>Facebook</a></p>
                            <p><a href="#"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>Instagram</a></p>
                            <p><a href="#"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>Twitter </a></p>
                        </div>
                    </div>
                </div>
                <div className="foot1">
                    <hr></hr>
                </div>
                <div className="foot2">
                    <p>Copyright © SugarProp, 2023 All rights reserved</p>
                    <p>Designed and Developed by<a href="#">Dash8Studio</a></p>
                    <p><a href="#">Terms of Service</a></p>
                    <p><a href="#">Cookies Settings</a></p>
                </div>
            </div>

        </>

    )
}
export default Source_1;
