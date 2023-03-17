import * as React from "react"
import Layout from "../components/Layout"
import "../assets/css/main.css"
import SEO from "../components/SEO";


const Galerija = () => {
  return (
      <>
          <Layout>
            <SEO title="Galerija" />
            <section className="section1">
                <h2 className="naslovPriprema">Galerija</h2>
                <div className="priprema">
                    <h3>Stranica je u pripremi</h3>
                </div>
            </section>

          </Layout>
      </>
  )
}

export default Galerija