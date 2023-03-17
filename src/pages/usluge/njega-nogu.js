import * as React from "react"
import Layout from "../../components/Layout"

import UslugeLista from '../../components/UslugeLista'
import "../../assets/css/njegaTekst.scss"
import SEO from "../../components/SEO";


export default function NjegaNogu() {
  return (
      <>

          <Layout>
            <SEO title="Njega nogu" />
            <section className="section1">

                <div className="njegaBox">

                    <div className="lista">
                        <UslugeLista />
                    </div>

                    <div className="uslugeTekst">
                        <h2>Njega nogu</h2>

                        {/*<h3>Pedikir</h3>*/}
                        <p className='opisUsluge'>Stopala su često zanemarivana u našoj svakodnevnoj rutini njege tijela, ali u našem kozmetičkom salonu smo posvećeni pružanju vrhunske njege stopalima. Nudimo različite tretmane koji će vaša stopala učiniti mekanima, glatkima i zdravima. Nakon tretmana, vaša će stopala izgledati i osjećati se fantastično, a vi ćete se osjećati potpuno opušteno i zadovoljno.</p>

                        <h3>Suvi / aparaturni pedikir</h3>
                        <p className='opisUsluge'>Ako želite osigurati optimalnu njegu svojih stopala, onda je suva/aparaturna pedikura idealni tretmani za vas u našem salonu. Suva pedikura omogućava potpunu njegu vaših stopala bez korištenja vode. Naši kozmetičari će ukloniti tvrde dijelove kože kako bi vaša stopala bila mekana i glatka. Aparaturni pedikir koristi najsuvremeniju tehnologiju kako bi se postigla dubinska njega stopala. Naši stručnjaci koriste uređaje, poput električnih turpija, kako bi uklonili tvrde naslage kože.</p>

                        <h3>QUEEN pedikir</h3>
                        <p className='opisUsluge'>Pružite svojim stopalima Kraljevski tretman! <br/> QUEEN pedikir obuhvata Suvi/aparaturni pedikir i još Spa tretman. Ovaj tretman uključuje toplu kupku, piling, masažu stopala i primjenu hidratantnih proizvoda koji će vam pružiti potpunu relaksaciju i osjećaj ugode.</p>

                    </div>

                </div>


            </section>
          </Layout>
      </>
  )
}