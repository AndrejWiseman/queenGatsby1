import * as React from "react"
import Layout from "../components/Layout"
import '../assets/css/greska.scss'
import SEO from "../components/SEO";

export default function Error() {
  return (
      <>
          <Layout>
            <SEO title="Error" />
            <section className="section1">

                <div className="wrapper">
                    <h1>404</h1>
                    <p className="tekst">Page not found</p>
                </div>
            </section>
          </Layout>
      </>
  )
}