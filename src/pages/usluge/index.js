import * as React from "react"
import Layout from "../../components/Layout"

import * as uslugeStyle from '../../assets/css/usluge.module.css'

import Card from "../../components/Card/Card"
import SEO from "../../components/SEO";




export default function Usluge() {
  return (
      <>

          <Layout>
            <SEO title="Usluge" />
            <section className="section1">


                <h1 className={uslugeStyle.naslov}>Usluge</h1>

                <div className={uslugeStyle.uslugeBox}>

                    <Card />

                </div>

            </section>
          </Layout>
      </>
  )
}