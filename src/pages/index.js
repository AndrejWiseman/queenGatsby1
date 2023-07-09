import * as React from "react"
import Layout from "../components/Layout"
import "../assets/css/main.css"
import Header from '../components/Header'
import MainSection from '../components/MainSection'

import { ParallaxProvider } from 'react-scroll-parallax';
import GalleryBox from "../components/GalleryBox";
import InstaSlicice from "../components/InstaSlicice";

import SEO from '../components/SEO'


export default function Home() {
  return (
      <>

        <SEO title="Početna" />

        <ParallaxProvider>
            <Header />
        </ParallaxProvider>

          <Layout>
            <section className="section1">

                <MainSection />

                <GalleryBox />

                <InstaSlicice />

            </section>
          </Layout>


      </>
  )
}
