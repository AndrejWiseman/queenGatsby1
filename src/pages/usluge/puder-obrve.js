import * as React from "react"
import Layout from "../../components/Layout"

import UslugeLista from '../../components/UslugeLista'
import "../../assets/css/njegaTekst.scss"
import SEO from "../../components/SEO";


export default function PuderObrve() {
  return (
      <>

          <Layout>
            <SEO title="Puder obrve" />
            <section className="section1">

                <div className="njegaBox">

                    <div className="lista">
                        <UslugeLista />
                    </div>

                    <div className="uslugeTekst">
                        <h2>Puder obrve</h2>

                        {/*<h3>Pedikir</h3>*/}
                        <p className='opisUsluge'>"Puder obrve" je prilično popularna usluga u svijetu ljepote i estetike, posebno među onima koji žele postići prirodan i sofisticiran izgled obrva. Osim što pomaže u stvaranju savršenog oblika obrva, ova usluga može pomoći i u ispravljanju asimetrije obrva, prekrivanju ožiljaka u obrvama i davanju vizuelno punijih i definisanijih obrva, bez potrebe za svakodnevnim nanošenjem kozmetike</p>

                    </div>

                </div>


            </section>
          </Layout>
      </>
  )
}