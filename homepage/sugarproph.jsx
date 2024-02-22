import React from 'react';
import './sugar.css'
import logo from './ey.svg'
import ax from './ax.png'
import icic from './icici.png'
import fox from './fox.webp'
import jg1 from './jgi.png'
import hand from './hand.png'
import ceo from './ceo.png'
import cfo from './cfo.jpg'
import cbo from './cbo.jpg'
import cio from './cio.jpg'
import cmo from './cmo.jpg'
import pune from './pune.png'
import kolkata from './kolkata.jpg'
import newd from './newd.png'
import qre1 from './qre1.svg'
import qre2 from './qre2.svg'
import qre3 from './qre3.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faHandshake } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight, faArrowRightArrowLeft, faBuildingUser, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';



function MyHome() {
    return (
        <div>

            <div>
                <div className="main">
                    <div className="containers">
                        {/* // logo */}
                        <div class="icon">
                            <img src={require('../homepage/image.gif.png')} alt={"ss"} width={"150"} height={"55"} />
                        </div>
                        {/* // nav bar */}
                        <div className="menu">
                            <nav>
                                <a href="home">Home</a>
                                <a href="home">Why Us</a>
                                <a href="home">How it works</a>
                                <a href="home">Assets</a>
                                <a href="home">About</a>
                                <a href="home">Blog</a>
                                <a href="home" id='login'>login</a>
                            </nav>
                        </div>
                    </div>
                    {/* //qutetions */}
                    <div class="container1">
                        <div class="explore">
                            <h2> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo!</h2>
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <a href="exi" id='exi'>explore investments <FontAwesomeIcon icon={faArrowRight} color='white'> </FontAwesomeIcon> </a> 
                        </div>
                        {/* //paynow */}
                        <div class="pay">
                            <p>pay now</p>
                        </div>
                    </div>
                    {/* // invest across */}
                    <div id='blog'>
                        <div id='c1'>
                            <p>
                                Invest across real estate asset classes
                            </p>
                        </div ><hr />
                        <div id='c2'>

                            <p><FontAwesomeIcon icon={faHandshake} fontSize={30} ></FontAwesomeIcon> <br />20+<br />
                                Real Estate assets Completed</p>
                        </div><hr />
                        <div id='c3'>
                            <p><FontAwesomeIcon icon={faPeopleGroup} fontSize={30}></FontAwesomeIcon> <br />2000+<br />
                                Certified Investors</p>
                        </div><hr />
                        <div id='c4'>
                            <i class="fa-solid fa-building-columns"></i>
                            <p><FontAwesomeIcon icon={faArrowRightArrowLeft} fontSize={30}></FontAwesomeIcon><br />780 cr+<br />
                                Done in Transactions</p>
                        </div>
                    </div>

                    {/* asset classes*/}
                    <div className='assets'>
                        <div className='single'>
                            <div className='blog1'>
                                <div className='fo1'>
                                    <FontAwesomeIcon icon={faBuildingUser} fontSize={40}></FontAwesomeIcon>
                                </div>

                                <div className='co1'>
                                    <h3>Land Backed Assets</h3>
                                    <p>invest in curated high yield <br /> debenutres secured by real estate</p>
                                    <h2><a href="learn" id='ler'>Learn More<FontAwesomeIcon icon={faArrowRight} color='red'> </FontAwesomeIcon> </a></h2>
                                </div>
                            </div>
                            <hr />
                            <div className='blog2'>
                                <div className='fo2'>
                                    <FontAwesomeIcon icon={faFileAlt} fontSize={40}></FontAwesomeIcon>
                                </div>
                                <div className='co2'>
                                    <h3>Debentures</h3>
                                    <p>invest in curated high yield
                                        <br /> debentres secured by real estate</p>
                                    <h2><a href="learn" id='ler'>Learn More<FontAwesomeIcon icon={faArrowRight} color='red'> </FontAwesomeIcon> </a></h2>
                                </div>
                            </div>
                        </div>
                        <div className='blog3'>
                            <h2>Invest Across Real Estate Asset Classes</h2>
                            <p>Choose from a range of curated,risk-assessed opportunities to build a portfolio that meets your investment goals</p>
                            <a href="exi" id='exi11'>explore investments <FontAwesomeIcon icon={faArrowRight} color='white'> </FontAwesomeIcon> </a>
                        </div>
                    </div>
                </div>
                {/* usp */}
                <div className='usp'>
                    <div className='tittle'>
                        <h2>OUR USP</h2>
                    </div>
                    <div className='bloga'>
                        <div className='blog4'>


                            <div className='range'>

                                <h2>18% to 30%</h2><br /><p>return range</p>
                            </div>
                            <div className='assets1'>
                                <h2>100% physical assets</h2><br />
                                <p>which means there is no risk involves</p>
                            </div>
                        </div>
                        <div className='blog5'>
                            <div className='easy'>
                                <h2>easy</h2><br /> <p> entry and exist experience</p>
                            </div>
                            <div className='status'>
                                <h2>track the status</h2><br />
                                <p>of your investment online.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                    <a href="exi" id='exi'>explore investments <FontAwesomeIcon icon={faArrowRight} color='white'> </FontAwesomeIcon> </a>
                    </div>
                </div>
                {/* hard work */}
                <div className='container4'>
                    <div className='hardwork'>
                        <div className='we'>
                            <p><h2>We do all the hard-work to make investment easy for you</h2></p>
                        </div>
                        <div className='risk'>
                            <p>Get access to curated, risk-assessed opportunities designed for retail investors</p>
                        </div>
                    </div>
                    <div className='blog6'>
                        <div className='Backed'>
                            <p><h3>Land Backed Assets</h3></p>
                            <p>Invest in high return Land Backed Real Estate Asse</p>
                        </div>
                        <div className='ease'>
                            <p><h3>Ease of Investing</h3></p>
                            <p>Easy to understand platform with insights and knowledge to up the performance of your portfolio</p>
                        </div>
                    </div>
                    <div className='blog7'>
                        <div className='inv'>
                            <p><h3>Diversified Investments</h3></p>
                            <p>Get investment opportunities across multiple asset classes to choose from.</p>
                        </div>

                        <div className='deals'>
                            <p><h3>Secured Deals</h3></p>
                            <p>Access to opportunities that are backed by physical assets and Tier-A developers</p>
                        </div>
                        <div class="s1">
                            <a href="exi" id='exi'>explore investments <FontAwesomeIcon icon={faArrowRight} color='white'> </FontAwesomeIcon> </a>
                        </div>
                    </div>
                </div>
                {/* chart */}
                <div className='container7'>
                    <div className='blog8'>
                        <div className='market'>
                            <h2>Market Comparison</h2>
                        </div>
                        <div className='content'>
                            <p>We provide you the opportunity to diversify your investments from traditional fixed income asset classes to help you earn higher returns.</p>
                        </div>

                    </div>
                    <div className='graph'>
                        <img src={require('../homepage/graph.png')} alt={"ss"} />
                    </div>
                    <div className='ssaa'>
                    <a href="exi" id='exi'>explore investments <FontAwesomeIcon icon={faArrowRight} color='white'> </FontAwesomeIcon> </a>
                    </div>
                </div>
                {/* how to set up */}
                <div className='start'>
                    <div className='min'>
                        <h2>Start Investing in just 3 minutes</h2>
                    </div>
                    <div className='box1'>
                        <div className='blog9'>
                            <div className='img11'>
                                <img src={qre1} alt={"ss"} />
                            </div>
                            <div className='r1'>
                                <div className='num1'>
                                    <p>1</p>
                                </div>
                                <div className='matter1'>
                                    <p>Sign up to create your account</p>
                                </div>
                            </div>
                        </div>
                        <div className='blog10'>
                            <div className='img21'>
                                <img src={qre2} alt={"ss"} />
                            </div>
                            <div className='r2'>
                                <div className='num2'>
                                    <p>2</p>
                                </div>
                                <div className='matter2'>
                                    <p>enter id proof address proof and bank details</p>
                                </div>
                            </div>
                        </div>
                        <div className='blog11'>
                            <div className='img31'>
                                <img src={qre3} alt={"ss"} />
                            </div>
                            <div className='r3'>
                                <div className='num3'>
                                    <p>3</p>
                                </div>
                                <div className='matter3'>
                                    <p>start exploring exclusive opportunities and invest.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='sub'>
                    <a href="exi" id='exi'>explore investments <FontAwesomeIcon icon={faArrowRight} color='white'> </FontAwesomeIcon> </a>             </div>
                </div>
                {/* media coverage */}
                <div className='media'>
                    <div className='m1'>
                        <h1 >Media Coverage</h1>
                        <p>Here's what the media says about us</p>
                    </div>
                    <div className='m2'>
                        <img src={require('../homepage/i1.png')} alt={"ss"} />
                    </div>

                </div>
                {/* assets */}
                <div className='rca'>
                    <div className='g1'>
                        <h2>Recently Closed Assets</h2>
                        <p>Exciting deals across tenures, asset classes and returns!</p>
                    </div>
                    <div className='g'>
                        <div className='g2'>
                            <div className='im1'>
                                <img src={require('../homepage/th.png')} alt={"ss"} />

                            </div>
                            <div className='a1'>
                                <h3> Assest26</h3>
                            </div>
                            <div className='d1'>
                                <div className='mi1'>
                                    <p>Min Investment <br />
                                        <b>2lakh</b></p>
                                </div>
                                <div className='mi2'>
                                    <p>
                                        Total Bucket <br />
                                        <b>25 Crore</b>
                                    </p>
                                </div>
                                <div className='mi3'>
                                    <p>
                                        NO Of Asset Owners <br /> <b>55</b>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className='g3'>
                            <div className='im2'>
                                <img src={require('../homepage/th.png')} alt={"ss"} />

                            </div>
                            <div className='a2'>
                                <h3> Assest27</h3>
                            </div>
                            <div className='d2'>
                                <div className='mi1'>
                                    <p>Min Investment <br />
                                        <b>2lakh</b></p>
                                </div>
                                <div className='mi2'>
                                    <p>
                                        Total Bucket <br />
                                        <b>25 Crore</b>
                                    </p>
                                </div>
                                <div className='mi3'>
                                    <p>
                                        NO Of Asset Owners <br /> <b>55</b>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='g4'>
                            <div className='im3'>
                                <img src={require('../homepage/th.png')} alt={"ss"} />

                            </div>
                            <div className='a3'>
                                <h3> Assest28</h3>
                            </div>
                            <div className='d3'>
                                <div className='mi1'>
                                    <p>Min Investment <br />
                                        <b>2lakh</b></p>
                                </div>
                                <div className='mi2'>
                                    <p>
                                        Total Bucket <br />
                                        <b>25 Crore</b>
                                    </p>
                                </div>
                                <div className='mi3'>
                                    <p>
                                        NO Of Asset Owners <br /> <b>55</b>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='g5'>
                            <div className='im3'>
                                <img src={require('../homepage/th.png')} alt={"ss"} />

                            </div>
                            <div className='a3'>
                                <h3> Assest29</h3>
                            </div>
                            <div className='d3'>
                                <div className='mi1'>
                                    <p>Min Investment <br />
                                        <b>2lakh</b></p>
                                </div>
                                <div className='mi2'>
                                    <p>
                                        Total Bucket <br />
                                        <b>25 Crore</b>
                                    </p>
                                </div>
                                <div className='mi3'>
                                    <p>
                                        NO Of Asset Owners <br /> <b>55</b>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='gg'>
                        <div className='g5'>
                            <div className='im4'>
                                <img src={require('../homepage/th.png')} alt={"ss"} />

                            </div>
                            <div className='a4'>
                                <h3> Assest30</h3>
                            </div>
                            <div className='d4'>
                                <div className='mi1'>
                                    <p>Min Investment <br />
                                        <b>2lakh</b></p>
                                </div>
                                <div className='mi2'>
                                    <p>
                                        Total Bucket <br />
                                        <b>25 Crore</b>
                                    </p>
                                </div>
                                <div className='mi3'>
                                    <p>
                                        NO Of Asset Owners <br /> <b>55</b>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='g6'>
                            <div className='im5'>
                                <img src={require('../homepage/th.png')} alt={"ss"} />

                            </div>
                            <div className='a5'>
                                <h3> Assest31</h3>
                            </div>
                            <div className='d5'>
                                <div className='mi1'>
                                    <p>Min Investment <br />
                                        <b>2lakh</b></p>
                                </div>
                                <div className='mi2'>
                                    <p>
                                        Total Bucket <br />
                                        <b>25 Crore</b>
                                    </p>
                                </div>
                                <div className='mi3'>
                                    <p>
                                        NO Of Asset Owners <br /> <b>55</b>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* devolpers */}
                <div className='de'>
                    <div className='ce1'>
                        <h1>
                            Know Who's Selling
                        </h1>
                        <p>Sugarprop vets and works with RERA-compliant, Grade A Developers with a proven track record of timely project execution</p>
                    </div>
                    <div className='lg'>
                        <div className=''>
                            <img src={require('../homepage/dd2.png')} alt={"ss"} />
                        </div>
                        <div>
                            <img src={require('../homepage/dd.png')} alt={"ss"} />
                        </div>
                    </div>
                </div>
                {/* our partners */}
                <div className='pa'>
                    <div className='pa1'>
                        <h2>Our Trusted Partners</h2>
                    </div>
                    <div className='pa2'>
                        <div className='ey'>
                            <img src={logo} alt={"ss"} width={100} height={100} />
                        </div>
                        <div className='ax'>
                            <img src={ax} alt={"ss"} width={150} height={50} />
                        </div>
                        <div className='icic'>
                            <img src={icic} alt={"ss"} width={150} height={50} />
                        </div>
                        <div className='fox'>
                            <img src={fox} alt={"ss"} width={150} height={150} />
                        </div>
                        <div className='jg1'>
                            <img src={jg1} alt={"ss"} width={150} height={150} />
                        </div>
                    </div>


                </div>
                {/* advertisement */}
                <div className='adv1'>
                    <div className='pp'>
                        <div className='pp1'>
                            <p><b> Invest with SugarProp</b> <br />
                                It's now your chance to invest in the best.</p>
                        </div>
                        <div className='arr'>
                        <a href="exi" >explore investments <FontAwesomeIcon icon={faArrowRight} color='red'> </FontAwesomeIcon> </a>
                        </div>

                    </div>
                    <div className='hh1'>
                        <div className='hand1'>
                            <img src={hand} alt='ss' />
                        </div>
                    </div>
                </div>
                {/* leadership */}
                <div className='team'>
                    <div className='leader' >
                        <div><h1>Our Leadership Team</h1></div>
                    </div>
                    <div className='founder'>
                        <div className='ceo'>
                            <img src={ceo} id='ceo1' alt="ceo" width={150} height={150} />
                            <p>  <b> Jai Baid </b> <br /> Founder, CEO</p>
                        </div>
                        <div className='cfo'>
                            <img src={cfo} id='cfo1' alt="cfo" width={150} height={150} />
                            <p>  <b> Bhavana Khemka </b> <br /> Co- Founder, CFO</p>
                        </div>
                        <div className='cbo'>
                            <img src={cbo} id='cbo1' alt="cbo" width={150} height={150} />
                            <p>  <b> Nishant </b> <br /> Co- Founder, CBO</p>
                        </div>
                    </div>
                    <div className='emp'>
                        <div className='cio'>
                            <img src={cio} id='cio1' alt="cio" width={150} height={150} />
                            <p>  <b> Prabin Singh </b> <br /> CIO</p>
                        </div>
                        <div className='cmo'>
                            <img src={cmo} id='cmo1' alt="cmo" width={150} height={150} />
                            <p>  <b> Avijit Pramanik</b> <br /> CMO</p>
                        </div>
                    </div>
                </div>
                {/* clients */}
                <div className='clients'>
                    <div className='t1'>
                        <p><h1>How clients thank Sugarprop</h1><br />Don't take our word for it; Hear from the people who've invested with our <br /> team in the past, crafting sustainable & lucrative returns along the way.</p>
                    </div>
                    <div className='tq'>
                        <div className='po1'>
                            <div className='pic3'>
                                <img id='pic3' src={pune} alt="pune" width={150} height={150} />
                            </div>
                            <div className='cn3'>
                                <p>"Before SugarProp, I had no idea that I could buy and trade in real estate futures even when a project was at a planning stage! Couldn't have hoped for</p>
                                <hr />
                                <p><h3>Veena Vipin Badra</h3>pune</p>
                            </div>
                        </div>
                        <div className='po2'>
                            <div className='pic2'>
                                <img id='pic2' src={pune} alt="pune" width={150} height={150} />
                            </div>
                            <div className='cn2'>
                                <p>"Before SugarProp, I had no idea that I could buy and trade in real estate futures even when a project was at a planning stage! Couldn't have hoped for</p>
                                <hr />
                                <p><h3>Veena Vipin Badra</h3>pune</p>
                            </div>
                        </div>
                        <div className='po3'>
                            <div className='pic1'>
                                <img id='pic1' src={pune} alt="pune" width={150} height={150} />
                            </div>
                            <div className='cn1'>
                                <p>"Before SugarProp, I had no idea that I could buy and trade in real estate futures even when a project was at a planning stage! Couldn't have hoped for</p>
                                <hr />
                                <p><h3>Veena Vipin Badra</h3>pune</p>
                            </div>
                        </div>

                    </div>
                    <div className='arr1'>
                    <a href="exi" >explore investments <FontAwesomeIcon icon={faArrowRight} color='red'> </FontAwesomeIcon> </a>
                    </div>
                </div>
                <div className='faq'>
                    <div className='q1'>
                        <h1>FAQ</h1>
                    </div>
                    <div className='q8'>
                        <div className='q2'>
                            <p>What is SUGARPROP?</p>
                        </div>
                        <div className='q3'>
                            <p>SUGARPROP is an online technology platform that provides users access to a curated set of real estate investment options and enables them to invest in any of the investments basis their selection.</p>
                        </div>
                    </div>
                    <div className='q9'>
                        <div className='q4'>
                            <p> What is fractional ownership or fractional investing?</p>

                        </div>
                        <div className='q5'>
                            <p>Fractional ownership is when multiple investors come together to invest capital in an asset (which could be real estate, airplane, art etc). It provides investors a percentage ownership in an asset, which gives proportionate rights in the income and capital value appreciation of the asset. It is a simple way to own an expensive asset, by splitting the ownership.Fractional ownership of real estate splits the ownership of high value property into smaller fractions to provide alternative investment avenues to retail investors along with proportionate ownership rights in the asset.It’s a traditional concept and the simplest example of this is owning shares in a company, through which you have a fractional ownership in the company.</p>
                        </div>
                    </div>
                    <div className='q10'>
                        <div className='q6'>
                            <p>Are all investments backed by real estate assets?</p>
                        </div>
                        <div className='q7'>
                            <p>Yes, all the investments are all fully secured by underlying real estate. The investments offered on the platform are either land backed real estate or debt (credit) investments.
                                1. Land Backed Real Estate : Such investments offer a Landshare in the underlying real estate. The real estate can be office, retail, warehousing, data center or residential assets. Such assets will be built by signing JDA with a Tier A developers.
                                2. Debt investments: In case of debt (credit) investments, these are backed by mortgage of the underlying real estate asset. No investment showcased on the platform is unsecured.</p>
                        </div>
                    </div>
                </div>

            </div>


        </div>

    )
}

export default MyHome;


