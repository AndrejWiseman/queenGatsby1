import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'


const Layout = ({ children }) => {
    return (
        <>

            <div className="glavniSadrzaj">

                <Navbar />

                {/*<Header />*/}

                {children}

                <Footer />

            </div>



        </>
    )
}

export default Layout