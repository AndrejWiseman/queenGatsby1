import * as React from "react"
import Layout from "../../components/Layout"

import UslugeLista from '../../components/UslugeLista'
import "../../assets/css/njegaTekst.scss"
import SEO from "../../components/SEO";


export default function Masaza() {
  return (
      <>

          <Layout>
            <SEO title="Masaža" />
            <section className="section1">

                <div className="njegaBox">

                    <div className="lista">
                        <UslugeLista />
                    </div>

                    <div className="uslugeTekst">
                        <h2>Masaža</h2>

                        {/*<h3>Pedikir</h3>*/}
                        <p className='opisUsluge'>Masaža je popularna usluga koja može pomoći u smanjenju napetosti mišića i opuštanju tijela. <br/>  Nakon masaže, klijenti se mogu osjećati opušteno, osvježeno i puni energije. Moguće su nuspojave, kao što su blagi bolovi u mišićima ili umor, ali to je uobičajeno i prolazi u roku od nekoliko sati. Masaža obično traje od 10 do 60 minuta, ovisno o željama klijenta i vrsti masaže koju odaberu.</p>

                    </div>

                </div>


            </section>
          </Layout>
      </>
  )
}