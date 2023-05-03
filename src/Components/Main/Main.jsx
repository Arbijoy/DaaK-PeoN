import React, {useEffect} from "react"
import './main.css'
import './main.scss'
import { Data } from "../../data/HotelData"
import {GrLocation} from 'react-icons/gr'
import {HiOutlineClipboardCheck} from 'react-icons/hi'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Main = () => {
     // Lets create a react hook to add a scrooll animation................................
     useEffect(()=> {
        Aos.init({duration: 2000})
    },[])


    console.log(Data)
    return(
        <section className="main container section" >
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Most visited destinations
                </h3>
            </div>
            <div className="secContent grid">
                {
                Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
                    return(
                        <div key={id} data-aos="fade-up" className="singleDestination">
                            <div className="imageDiv">
                                <img src={imgSrc} alt={destTitle} />
                            </div>
                            <div className="cardInfo">
                                  <h4 className="destTitle">{destTitle}</h4>
                                  <span className="continent flex">
                                    <GrLocation className="icon" />
                                    <span className="name">{location}</span>
                                  </span>
                                  <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h1>{fees}</h1>
                                        </div>
                                  </div>
                                  <div className="dese">
                                    <p>{description}</p>
                                  </div>
                                  <button className="btn flex">
                                    DETAILS <HiOutlineClipboardCheck className="icon"/>
                                  </button>
                            </div>
                        </div>
                    )
                })
                }

            </div>
            
        </section>
    )
}

export default Main