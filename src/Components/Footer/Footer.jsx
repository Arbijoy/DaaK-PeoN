import React, {useEffect} from "react"
import './footer.css'
import './footer.scss'
import video2 from '../../Assets/video.mp4'
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillGithub} from 'react-icons/ai'
import {FaLinkedin} from 'react-icons/fa'
import {AiOutlineWechat} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FiChevronRight} from 'react-icons/fi'


import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer= () => {

 // Lets create a react hook to add a scrooll animation................................
 useEffect(()=> {
    Aos.init({duration: 2000})
},[])

    return(
       <section className="footer">
        <div className="videoDiv">
            <video src={video2} loop autoPlay muted type="video.mp4"></video>
        </div>
        <div className="secContent container">
            <div className="contactDiv flex">
                <div data-aos="fade-up" className="text">
                    <small>KEEP IN TOUCH</small>
                    <h2>Travel with us</h2>
                </div>
                <div className="inputDiv flex">
                    <input data-aos="fade-up" type="text" placeholder="Enter Email Address" />
                    <button data-aos="fade-up" className="btn flex" type="submit">
                        SEND<FiSend className="icon"/>
                    </button>
                </div>
            </div>
            <div className="footerCard flex">
            <div className="footerIntro flex">
                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <MdOutlineTravelExplore className="icon"/>Travel.
                    </a>
                </div>
                <div data-aos="fade-up" className="footerParagraph">
                    Traveling is the best medicine to heal the mind, body and soul. Those who hit the road often can vouch for the numerous benefits of traveling and exploring new places. It makes you a more confident person, lets you discover new hideaways, culture, and people, and also positively affects health.
                </div> 
                <div data-aos="fade-up" className="footerSocials flex">
                    <FaLinkedin className="icon"/>
                    <AiOutlineWechat className="icon"/>
                    <AiFillGithub className="icon"/>
                    <BsFacebook className="icon"/>
                    <AiOutlineTwitter className="icon"/>
                </div>
            </div>
            <div className="footerLinks grid">
                <div data-aos="fade-up" data-aos-direction="3000" className="linkGroup">
                    <span className="groupTitle">
                        OUR AGENCY
                    </span>
                    <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Services
                    </li>
                    <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Insurance
                    </li>
                    <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Agency
                    </li>
                    <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Tourism
                    </li>
                    <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Payment
                    </li>
                </div>
                {/* Group Two */}
                <div data-aos="fade-up" data-aos-direction="4000" className="linkGroup">
                    <span className="groupTitle">
                        PARTNERS
                    </span>
                    <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Bookings
                    </li>
                    <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Rentcars
                    </li>
                    <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                       HostelWorld
                    </li>
                    <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Gofly
                    </li>
                    <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        TripAdvisor
                    </li>
                </div>
                {/* Group Three */}
                <div data-aos="fade-up" data-aos-direction="5000" className="linkGroup">
                    <span className="groupTitle">
                       LAST MINUTE
                    </span>
                    <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Yunnan
                    </li>
                    <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Beijing
                    </li>
                    <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Shanghai
                    </li>
                    <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                       Nanjing
                    </li>
                    <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Hong Kong
                    </li>
                </div>
            </div>
                <div className="footerDiv flex">
                    <small>BEST TRAVEL WEBSITE</small>
                    <small>COPYRIGHTS RESERVED BY---@DaaK PeoN_2023@.</small>
                </div>
            </div>
        </div>
        

       </section>
    )
}

export default Footer