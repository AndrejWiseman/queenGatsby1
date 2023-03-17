import * as React from "react"
import Layout from "../components/Layout"
import Carousel from "../components/Carousel"
import * as nasSalonStyle from '../assets/css/nasSalon.module.css'
import {graphql} from "gatsby";
import SEO from "../components/SEO";




const NasSalon = ({ data }) => {
    const images = data.allFile.nodes.filter(node => node.extension === "jpg")

  return (
      <>
          <Layout>
            <SEO title="Naš salon" />
            <section className="section1">
                <div className={nasSalonStyle.naslov}>
                    <h2>Zavirite u naš salon</h2>
                </div>


                <Carousel images={images} />


            </section>

          </Layout>
      </>
  )
}

    export const query = graphql`
      query {
        allFile (filter: {absolutePath: {regex: "//salon//"}}) {
          nodes {
            publicURL
            extension
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
                    
            }
          }
        }
      }
    `

export default NasSalon
