import * as React from "react"
import Layout from "../components/Layout"
import * as rezervacijaStyle from '../assets/css/rezervacija.module.css'

import { CiInstagram, CiPhone, CiFacebook,  } from "react-icons/ci";
import { FaViber } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";
import SEO from "../components/SEO";


export default function Rezervacija() {
  return (
      <>
          <Layout>
            <SEO title="Rezervacija" />
            <section className="section1">
                <div className={rezervacijaStyle.rezervacijaWrapper}>
                    <div className={rezervacijaStyle.rezervacijaNaslov}>
                        <h2>Rezervišite svoje termine</h2>
                        <p>Izaberite jedan od načina rezervacije i jednostavno zakažite svoje tretmane.</p>
                    </div>
                    <div className={rezervacijaStyle.rezervacijaPoziv}>
                        <a href="tel: +38765255827"><CiPhone /><p>Pozovite nas</p></a>
                    </div>
                    <div className={rezervacijaStyle.rezervacijaSocial}>
                        <a href="viber://chat?number=%2B38765255827"><FaViber /></a> <a href="https://www.instagram.com/kozmeticki_salon_queen/"><CiInstagram /></a> <a href="https://www.facebook.com/ks.queen.prnjavor"><CiFacebook /></a> <a
                        href="https://m.me/Kozmetički salon - QUEEN=fm"><RiMessengerLine /></a>
                    </div>
                </div>
            </section>

          </Layout>
      </>
  )
}
