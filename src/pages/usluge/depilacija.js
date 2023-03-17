import * as React from "react"
import Layout from "../../components/Layout"

import UslugeLista from '../../components/UslugeLista'
import "../../assets/css/njegaTekst.scss"
import SEO from "../../components/SEO";


export default function Depilacija() {
  return (
      <>

          <Layout>
              <SEO title="Depilacija" />
            <section className="section1">

                <div className="njegaBox">

                    <div className="lista">
                        <UslugeLista />
                    </div>

                    <div className="uslugeTekst">
                        <h2>Depilacija</h2>

                        {/*<h3>Pedikir</h3>*/}
                        <p className='opisUsluge'>Depilacija toplim voskom jedna je od najpopularnijih metoda depilacije u kozmetičkim salonima. Ova metoda uklanja dlačice s korijenom, što znači da su rezultati dugotrajniji u usporedbi s drugim metodama uklanjanja dlačica poput brijanja. <br/>
                        Kod depilacije toplim voskom, zagrijani vosak nanosi se na kožu i zatim se uklanja brzim pokretom u suprotnom smjeru rasta dlačica. Ovaj postupak može biti neugodan, ali kozmetičari će se pobrinuti da se osjećate što ugodnije.
                        Prednosti depilacije toplim voskom uključuju dugotrajne rezultate, brzinu tretmana i manju mogućnost urastanja dlačica u kožu.</p>

                    </div>

                </div>


            </section>
          </Layout>
      </>
  )
}