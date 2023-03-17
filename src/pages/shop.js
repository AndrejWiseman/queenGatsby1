import * as React from "react"
import Layout from "../components/Layout"
import "../assets/css/main.css"
import SEO from "../components/SEO";



const Shop = () => {
  return (
      <>
          <Layout>
            <SEO title="Shop" />
            <section className="section1">
                <h2 className="naslovPriprema">SHOP</h2>
                <div className="priprema">
                    <h3>Stranica je u pripremi</h3>
                </div>
            </section>

          </Layout>
      </>
  )
}

export default Shop