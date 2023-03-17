import React from 'react'
import Layout from "../components/Layout"



const Testing = () => {

    const enterMouse = () => {
        console.log('enter')
    }

    const leaveMouse = () => {
        console.log('leave')
    }


    return (
        <>

            <Layout>
                <h1>Ovo je test strana!</h1>

                <button id="gumb" className='dugme' onMouseEnter={enterMouse} onMouseLeave={leaveMouse}>
                    Stisni me
                </button>
            </Layout>
        </>
    )
}

export default Testing