import * as React from "react"
import Layout from "../../components/Layout"

import UslugeLista from '../../components/UslugeLista'
import "../../assets/css/njegaTekst.scss"
import SEO from "../../components/SEO";


export default function Sminkanje() {
  return (
      <>

          <Layout>
            <SEO title="Šminkanje" />
            <section className="section1">

                <div className="njegaBox">

                    <div className="lista">
                        <UslugeLista />
                    </div>

                    <div className="uslugeTekst">
                        <h2>Šminkanje</h2>

                        {/*<h3>Pedikir</h3>*/}
                        <p className='opisUsluge'>Želite li izgledati savršeno i zanosno za posebnu priliku ili samo želite osvježiti svoj svakodnevni izgled?
                        Nudimo šminkanje za sve prilike - od vjenčanja, maturalnih zabava, rođendanskih proslava do raznih društvenih događaja.
                        Koristimo najkvalitetnije proizvode za šminkanje kako bismo vam osigurali dugotrajni izgled tijekom cijelog događaja.
                        Uživajte u potpunom iskustvu šminkanja kod nas i osjećajte se samopouzdano i predivno za svaku priliku.</p>

                    </div>

                </div>


            </section>
          </Layout>
      </>
  )
}