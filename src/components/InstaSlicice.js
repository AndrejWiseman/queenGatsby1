import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import * as instaSliciceStyle from '../assets/css/instaSlicice.module.css'
import { CiInstagram } from "react-icons/ci"


const InstaSlicice = () => {
    return (
        <div className={instaSliciceStyle.instaBox}>
            <div className={instaSliciceStyle.box1}>

                <div className={instaSliciceStyle.box11}
                    data-sal="slide-up"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    data-sal-duration="500"
                >
                    <p>Dobrodošli u naš Kozmeticki salon Queen! Ovdje ćete naći sve što je potrebno za savršeno njegovanje svojih noktiju. Naš tim stručnih tehničara za nokte pruža širok spektar usluga, uključujući manikure, pedikure, geliranje noktiju, lakiranje noktiju i još mnogo toga.</p>
                </div>

                <div className={instaSliciceStyle.box12}
                    data-sal="zoom-in"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    data-sal-duration="500"
                >
                    <div className={instaSliciceStyle.instaImgVelikaWrap}>
                        <StaticImage
                            src="../assets/images/osnovne/qq1-1.png"
                            alt="slika"
                            className={instaSliciceStyle.instaImgVelika}
                            placeholder="blurred"
                            layout="fullWidth"
                            // style={{height: "100px"}}
                        />
                        <p>Svi naši proizvodi su visokokvalitetni i sigurni za korištenje, te smo uvijek spremni preporučiti najbolje proizvode za vaše individualne potrebe.</p>
                    </div>
                </div>
            </div>

            <div className={instaSliciceStyle.box2}>
                <div className={instaSliciceStyle.box21}>
                    <a href="https://www.instagram.com/kozmeticki_salon_queen/" target="_blank" rel="noreferrer"><CiInstagram /> <p>PRATITE NAS</p></a>
                </div>

                <div className={instaSliciceStyle.box22}
                    data-sal="zoom-in"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    data-sal-duration="500"
                >
                    <a href="https://www.instagram.com/p/CpDm1kLDdSZ/" target="_blank" rel="noreferrer" className={instaSliciceStyle.box22Slicica}>
                        <StaticImage
                            src="../assets/images/osnovne/insta1.jpg"
                            alt="slika"
                            className={instaSliciceStyle.instaImgVelika}
                            placeholder="blurred"
                            layout="fullWidth"
                        />
                    </a>
                    <a href="https://www.instagram.com/p/CoZS_JfoNLd/" target="_blank" rel="noreferrer" className={instaSliciceStyle.box22Slicica}>
                        <StaticImage
                            src="../assets/images/osnovne/insta3.jpg"
                            alt="slika"
                            className={instaSliciceStyle.instaImgVelika}
                            placeholder="blurred"
                            layout="fullWidth"
                            // style={{height: "100px"}}
                        />
                    </a>
                    <a href="https://www.instagram.com/p/Coy6i6_DGWA/" target="_blank" rel="noreferrer" className={instaSliciceStyle.box22Slicica}>
                        <StaticImage
                            src="../assets/images/osnovne/insta4.jpg"
                            alt="slika"
                            className={instaSliciceStyle.instaImgVelika}
                            placeholder="blurred"
                            layout="fullWidth"
                            // style={{height: "100px"}}
                        />
                    </a>
                    <a href="https://www.instagram.com/p/CnVAs2auv6N/" target="_blank" rel="noreferrer" className={instaSliciceStyle.box22Slicica}>
                        <StaticImage
                            src="../assets/images/osnovne/insta2.jpg"
                            alt="slika"
                            className={instaSliciceStyle.instaImgVelika}
                            placeholder="blurred"
                            layout="fullWidth"
                            // style={{height: "100px"}}

                        />
                    </a>
                    <a href="https://www.instagram.com/p/CG-p1Tzny4d/" target="_blank" rel="noreferrer" className={instaSliciceStyle.box22Slicica}>
                        <StaticImage
                            src="../assets/images/osnovne/insta6.jpg"
                            alt="slika"
                            className={instaSliciceStyle.instaImgVelika}
                            placeholder="blurred"
                            layout="fullWidth"
                            // style={{height: "100px"}}
                        />
                    </a>
                    <a href="https://www.instagram.com/p/CkTAtD4Dp64/" target="_blank" rel="noreferrer" className={instaSliciceStyle.box22Slicica}>
                        <StaticImage
                            src="../assets/images/osnovne/insta5.jpg"
                            alt="slika"
                            className={instaSliciceStyle.instaImgVelika}
                            placeholder="blurred"
                            layout="fullWidth"
                            // style={{height: "100px"}}
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default InstaSlicice