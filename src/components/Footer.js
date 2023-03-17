import React from 'react'
import * as footerStyle from '../assets/css/footer.module.css'
import { Link } from 'gatsby'
import {CiLocationOn, CiInstagram, CiFacebook} from "react-icons/ci";
import { FaViber } from "react-icons/fa";
import {RiMessengerLine} from "react-icons/ri";

const Footer = () => {
    let g = new Date();
    let godina = g.getFullYear();

    return (
        <footer className={footerStyle.footer}>

            <div className={footerStyle.fbox1}>

                <div className={footerStyle.linkoviBox}
                    data-sal="slide-right"
                    data-sal-delay="100"
                    data-sal-easing="ease"
                    data-sal-duration="500"
                >
                    <h2>Salon</h2>
                    <div className={footerStyle.linkovi}>
                        <Link to='/o-nama'>O nama</Link>
                        <Link to='/galerija'>Galerija</Link>
                        <Link to='/usluge'>Usluge</Link>
                    </div>
                </div>

                <div className={footerStyle.radnoVreme}
                    data-sal="slide-left"
                    data-sal-delay="100"
                    data-sal-easing="ease"
                    data-sal-duration="500"
                >
                    <h2>Radno vrijeme</h2>
                    <table>
                        <tr>
                            <td>Ponedjeljak</td>
                            <td>9.00 - 20.00</td>
                        </tr>
                        <tr>
                            <td>Utorak</td>
                            <td>9.00 - 20.00</td>
                        </tr>
                        <tr>
                            <td>Srijeda</td>
                            <td>9.00 - 20.00</td>
                        </tr>
                        <tr>
                            <td>Četvrtak</td>
                            <td>12.00 - 20.00</td>
                        </tr>
                        <tr>
                            <td>Petak</td>
                            <td>12.00 - 20.00</td>
                        </tr>
                        <tr>
                            <td>Subota</td>
                            <td>9.00 - 14.00</td>
                        </tr>
                        <tr>
                            <td>Nedjelja</td>
                            <td>Ne radimo</td>
                        </tr>
                    </table>
                </div>

                <div className={footerStyle.kontakt}
                    data-sal="slide-right"
                    data-sal-delay="100"
                    data-sal-easing="ease"
                    data-sal-duration="500"
                >
                    <h2>Kontakt</h2>
                    <div className={footerStyle.adresa}>
                        <h4>Adresa:</h4>
                        <p>Vladike Platona 26c, 78430 Prnjavor</p>
                        <p>Bosna i Hercegovina</p>

                        <div className={footerStyle.lokacija}>
                            <CiLocationOn /> <a href="https://goo.gl/maps/bs5eUjS4Lek41Pzm9" target="_blank" >LOKACIJA SALONA</a>
                        </div>
                    </div>

                    <div className={footerStyle.telefon}>
                        <h4>Telefon:</h4>
                        <p>+387 65 255 827</p>
                    </div>

                    <div className={footerStyle.socijalneMreze}>
                        <a href="viber://chat?number=%2B38765255827"><FaViber /></a> <a href="https://www.instagram.com/kozmeticki_salon_queen/"><CiInstagram /></a> <a href="https://www.facebook.com/ks.queen.prnjavor"><CiFacebook /></a> <a
                        href="https://m.me/Kozmetički salon - QUEEN=fm"><RiMessengerLine /></a>
                    </div>

                </div>

            </div>

            <div className={footerStyle.fbox2}>
                <p>&copy; <span className={footerStyle.godina}>2018 - {godina} Kozmetički salon Queen</span></p>
            </div>
        </footer>
    )
}



export default Footer