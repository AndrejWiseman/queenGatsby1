import React, {useState} from "react"
import * as testStyle from '../assets/css/test.module.css'

import { graphql } from "gatsby"

import Carousel from "../components/Carousel"

import Accordion from "../components/accordion/Accordion"

import Card from "../components/Card/Card"

import UslugeLista from '../components/UslugeLista'



const TestPage = ({ data }) => {
    const images = data.allFile.nodes.filter(node => node.extension === "jpg")



    return (
        <>
            <h2>Ovo je test</h2>


            <div>

                <UslugeLista />

            </div>



            <div className={testStyle.uslugeBox}>


                <Card />


                {/*<Card*/}
                {/*    usluga='Njega ruku'*/}
                {/*    // naslov='Manikir'*/}
                {/*    tekst='Nadogradnja, geliranje, trajni lak, Queen, Swarovski...'*/}
                {/*    slika={manikir}*/}
                {/*    to="/"*/}
                {/*/>*/}

                {/*<Card*/}
                {/*    usluga='Njega nogu'*/}
                {/*    // naslov='Pedikir'*/}
                {/*    tekst='Vasa stopala zasluzuju najbolju njegu!'*/}
                {/*    slika={pedikir}*/}
                {/*    to="/"*/}
                {/*/>*/}

                {/*<Card*/}
                {/*    usluga='Depilacija'*/}
                {/*    // naslov='Depilacija'*/}
                {/*    tekst='Konstantno uklanjanje dlaka je skoro svakodnevna tema za žene.'*/}
                {/*    slika={depilacija}*/}
                {/*    to="/"*/}
                {/*/>*/}

                {/*<Card*/}
                {/*    usluga='Masaža'*/}
                {/*    // naslov='Masaža'*/}
                {/*    tekst='Konstantno uklanjanje dlaka je skoro svakodnevna tema za žene.'*/}
                {/*    slika={masaza}*/}
                {/*    to="/"*/}
                {/*/>*/}

                {/*<Card*/}
                {/*    usluga='Obrve'*/}
                {/*    // naslov='Masaža'*/}
                {/*    tekst='Konstantno uklanjanje dlaka je skoro svakodnevna tema za žene.'*/}
                {/*    slika={obrve}*/}
                {/*    to="/"*/}
                {/*/>*/}

                {/*<Card*/}
                {/*    usluga='Trepavice'*/}
                {/*    // naslov='Masaža'*/}
                {/*    tekst='Konstantno uklanjanje dlaka je skoro svakodnevna tema za žene.'*/}
                {/*    slika={trepavice}*/}
                {/*    to="/"*/}
                {/*/>*/}

                {/*<Card*/}
                {/*    usluga='Lash Lift'*/}
                {/*    // naslov='Masaža'*/}
                {/*    tekst='Konstantno uklanjanje dlaka je skoro svakodnevna tema za žene.'*/}
                {/*    slika={lash}*/}
                {/*    to="/"*/}
                {/*/>*/}

                {/*<Card*/}
                {/*    usluga='Puder obrve'*/}
                {/*    // naslov='Masaža'*/}
                {/*    tekst='Konstantno uklanjanje dlaka je skoro svakodnevna tema za žene.'*/}
                {/*    slika={powder}*/}
                {/*    to="/"*/}
                {/*/>*/}

                {/*<Card*/}
                {/*    usluga='Sminkanje'*/}
                {/*    // naslov='Masaža'*/}
                {/*    tekst='Konstantno uklanjanje dlaka je skoro svakodnevna tema za žene.'*/}
                {/*    slika={sminkanje}*/}
                {/*    to="/"*/}
                {/*/>*/}

            </div>



            <Accordion />



            <div className={testStyle.carouselWraper}>
              <h1>My Image Carousel</h1>
              <Carousel images={images} />
            </div>
        </>
    )
}

// export const query = graphql`
//   query {
//     allFile (filter: {absolutePath: {regex: "//carousel1//"}}) {
//       nodes {
//         publicURL
//         extension
//         childImageSharp {
//           gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
//         }
//       }
//     }
//   }
// `


export const query = graphql`
  query {
    allFile (filter: {absolutePath: {regex: "//carousel1//"}}) {
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

export default TestPage
