import React from 'react'
import * as galleryBoxStyle from '../assets/css/galleryBox.module.css'
import { Link } from 'gatsby'


const GalleryBox = () => {
    return (
        <div className={galleryBoxStyle.box}>
            <div className={galleryBoxStyle.unutrasnjiBox1}></div>
            <div className={galleryBoxStyle.unutrasnjiBox2}
                data-sal="slide-up"
                data-sal-delay="300"
                data-sal-easing="ease"
                data-sal-duration="500"
            >
                <Link to='/galerija'>
                    <h2>Galerija</h2>
                    <p>Naš salon je mjesto gdje se opuštanje, ljepota i zadovoljstvo spajaju u savršenom skladu.  Naš cilj je da se brinemo o vašem tijelu od glave do pete, kako bi se osjećali zadovoljno i samopouzdano u svojoj koži.</p>
                </Link>
            </div>
        </div>
    )
}

export default GalleryBox
