import React from 'react'
import { Link } from 'gatsby'
import * as mainSectionStyle from '../assets/css/mainSection.module.css'
import { StaticImage } from 'gatsby-plugin-image'


const MainSection = () => {



    return (
        <div className={mainSectionStyle.main}>

            <div className={mainSectionStyle.naslov} >
                <h1 data-sal="slide-right"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    data-sal-duration="500"
                >Dobrodošli u Kozmetički salon Queen</h1>

                <h3 data-sal="slide-left"
                        data-sal-delay="300"
                        data-sal-easing="ease-in"
                     data-sal-duration="500"
                >
                    Zaslužuješ trenutak samo za tebe. <br/> Naša strast je da vam pomognemo da se osjećate kao Kraljica!</h3>
            </div>


            <div >

                <div className={mainSectionStyle.box}>
                    <div className={mainSectionStyle.slikaBox}
                            data-sal="slide-right"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            data-sal-duration="500"
                        >
                        <Link to='/nas-salon' >
                            <div className={mainSectionStyle.slikaBoxRam}></div>
                            <StaticImage
                                src="../assets/images/osnovne/16-1.jpg"
                                alt="slika"
                                className={mainSectionStyle.mainImg}
                                placeholder="blurred"
                                layout="fullWidth"
                                // style={{height: "100px"}}
                            />
                        </Link>
                        <div className={mainSectionStyle.boxTekst}
                            data-sal="slide-right"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            data-sal-duration="800"
                        >
                            <h3>Naš salon</h3>
                            <p>U našem salonu možete uživati u opuštajućoj atmosferi i prepustiti se našem stručnom timu.</p>
                        </div>
                    </div>

                    <div className={mainSectionStyle.slikaBox}
                        data-sal="slide-left"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                        data-sal-duration="500"
                    >
                        <Link to='/usluge'>
                            <div className={mainSectionStyle.slikaBoxRam}></div>
                            <StaticImage
                                src="../assets/images/osnovne/1-1.jpg"
                                alt="slika"
                                className={mainSectionStyle.mainImg}
                                placeholder="blurred"
                                layout="fullWidth"
                                // style={{height: "100px"}}
                            />
                        </Link>
                        <div className={mainSectionStyle.boxTekst}
                            data-sal="slide-left"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            data-sal-duration="800"
                        >
                            <h3>Usluge</h3>
                            <p>Naš tim pruža širok spektar usluga, uključujući manikure, pedikure, geliranje noktiju, puder obrve i još mnogo toga.</p>
                        </div>
                    </div>
                </div>


                <div className={mainSectionStyle.box}>
                    <div className={mainSectionStyle.slikaBox}
                        data-sal="slide-right"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                        data-sal-duration="500"
                    >

                        <Link to='/o-nama'>
                            <div className={mainSectionStyle.slikaBoxRam}></div>
                            <StaticImage
                                src="../assets/images/osnovne/17.png"
                                alt="slika"
                                className={mainSectionStyle.mainImg}
                                placeholder="blurred"
                                layout="fullWidth"
                                // style={{height: "100px"}}
                            />
                        </Link>
                        <div className={mainSectionStyle.boxTekst}>
                            <h3>O nama</h3>
                            {/*<p>Naš salon je dizajniran kako bi vam pružio ugodno i opuštajuće iskustvo, dok se naši stručnjaci brinu o vašim potrebama.</p>*/}
                            <p>Posjetite nas i prepustite se našim stručnjacima, kako bi dobili najbolju njegu i uslugu.</p>
                        </div>
                    </div>

                    <div className={mainSectionStyle.slikaBox}
                        data-sal="slide-left"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                        data-sal-duration="500"
                    >

                        <div className={mainSectionStyle.boxTekst1}>

                            <p>Pobegnite od svakodnevne užurbane stvarnosti i priuštite si neki od naših tretmana. <br/> Njegovane ruke i nokti najvidljivija su vizit karta kako se brinemo o sebi.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default MainSection