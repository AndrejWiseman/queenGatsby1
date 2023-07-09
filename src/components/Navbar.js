import React, { useState } from 'react'
import { Link } from 'gatsby'
import * as navStyle from '../assets/css/navbar.module.css'
import "../assets/css/main.css"
import {navLinks, pokaziLinkove } from '../assets/css/navbar.module.css'
import logo from '../assets/images/logo-bg/logo3.png'


const Navbar = () => {


    const [show, setShow] = useState(false)

    const [offHover, setOnHover] = useState(false)
    const [offHoverRezerv, setOnHoverRezerv] = useState(false)


    const enterMouse = () => {
        setOnHover(true)
    }
    const leaveMouse = () => {
        setOnHover(false)
    }
    const enterMouseRezerv = () => {
        setOnHoverRezerv(true)
    }
    const leaveMouseRezerv = () => {
        setOnHoverRezerv(false)
    }


    const klik = () => {
        setShow(false)
        window.scrollTo(0, 0)

    }



    return (

        <nav className={navStyle.navbar}>

            <div id='hambRam' className={offHover ? `${navStyle.hidden}` : `${navStyle.hambRam}`}></div>

            <button id='dugme' className={navStyle.dugme} onClick={() => setShow(!show)} onMouseEnter={enterMouse} onMouseLeave={leaveMouse}
                data-sal="zoom-in"
                data-sal-delay="300"
                data-sal-easing="ease"
                data-sal-duration="500"
            >
                <span className={navStyle.bar}></span>
                <span className={navStyle.bar}></span>
                <span className={navStyle.bar}></span>
            </button>


            <ul className={show ? `${navLinks} ${pokaziLinkove}` : `${navLinks}`}>
                <li>
                    <Link to="/" className={navStyle.navLink} activeClassName={navStyle.activeLink} onClick={klik}>Početna</Link>
                </li>
                <li>
                    <Link to="/cjenovnik" className={navStyle.navLink} activeClassName={navStyle.activeLink} onClick={klik}>Cjenovnik</Link>
                </li>
                <li>
                    <Link to="/edukacija" className={navStyle.navLink} activeClassName={navStyle.activeLink} onClick={klik}>Edukacija</Link>
                </li>
                <li>
                    <Link to="/shop" className={navStyle.navLink} activeClassName={navStyle.activeLink} onClick={klik}>Shop</Link>
                </li>
                <li>
                    <Link to="/usluge" className={navStyle.navLink} activeClassName={navStyle.activeLink} onClick={klik}>Usluge</Link>
                </li>
                <li>
                    <Link to="/galerija" className={navStyle.navLink} activeClassName={navStyle.activeLink} onClick={klik}>Galerija</Link>
                </li>
                <li>
                    <Link to="/rezervacija" className={navStyle.navLink} activeClassName={navStyle.activeLink} onClick={klik}>Kontakt</Link>
                </li>
            </ul>



            <div >
                <Link to="/" className={navStyle.logo}>
                    <img src={logo} alt="logo"/>
                </Link>
            </div>

            {/*<div className={navStyle.rezervRam}></div>*/}

            <div className={offHoverRezerv ? `${navStyle.hidden}` : `${navStyle.rezervRam}`}></div>
            <button id="gumb" className={navStyle.rezervacijaDugme} onMouseEnter={enterMouseRezerv} onMouseLeave={leaveMouseRezerv}
                data-sal="zoom-in"
                data-sal-delay="300"
                data-sal-easing="ease"
                data-sal-duration="500"
            >
                <Link to='/rezervacija' >Rezerviši<br/>termin</Link>
            </button>

        </nav>


    )
}

export default Navbar