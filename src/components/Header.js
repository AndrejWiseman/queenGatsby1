import React from 'react'
import "../assets/css/main.css"
import * as headerStyle from '../assets/css/header.module.css'
import { StaticImage } from 'gatsby-plugin-image'
import logo from '../assets/images/logo-bg/queen3.png'
import { HiArrowLongDown } from "react-icons/hi2";

// import { ParallaxProvider } from 'react-scroll-parallax';
import { useParallax } from 'react-scroll-parallax';


// import bgSlika from '../assets/images/logo-bg/q1.jpg'
// import styled from 'styled-components'




const Header = () => {

    const { ref } = useParallax({ speed: -20 });


    return (



        <>
        <header className="header">

            <div className={headerStyle.hero} ref={ref}>




                <div className={headerStyle.heroSlika} >
                    <StaticImage
                        src="../assets/images/logo-bg/q1.jpg"
                        alt="slika"
                        className={headerStyle.heroImg}
                        placeholder="blurred"
                        layout="fullWidth"
                        style={{height: "100vh"}}
                    />

                </div>



                <div
                    className={headerStyle.logo}
                    ref={ref}
                >
                    <img src={logo} alt="logo"
                        data-sal="zoom-in"
                        data-sal-delay="300"
                        data-sal-easing="ease-out"
                         data-sal-duration="1000"
                    />
                </div>

                <div className={headerStyle.strlBox}>
                    <HiArrowLongDown  className={headerStyle.strl}/>
                </div>

            </div>


        </header>
        </>



    )
}

export default Header




// const Component = () => {
//
//   return <div ref={ref} className="my-thing" />;
// };