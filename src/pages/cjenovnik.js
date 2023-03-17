import * as React from "react"
import Layout from "../components/Layout"
import "../assets/css/main.css"

import Accordion from "../components/accordion/Accordion"
import SEO from "../components/SEO";



const Cjenovnik = () => {
  return (
      <>
          <Layout>
            <SEO title="Cjenovnik" />

            <section className="section1">
                <h2 className="naslovPriprema">Cjenovnik</h2>
                <div className="priprema">
                    {/*<h3>Stranica je u pripremi</h3>*/}

                    <Accordion />
                </div>
            </section>

          </Layout>
      </>
  )
}

export default Cjenovnik