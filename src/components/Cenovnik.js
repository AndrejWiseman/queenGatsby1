import React,  { useState } from 'react'
import { wrapper, accordion, title, content, show } from '../assets/css/cenovnik.module.css'

import cenovnik from "../cenovnik.json"


const Cenovnik = () => {

    const [selected, setSelected] = useState(false)

    // const toggle = (i) => {
    //     if (selected === i) {
    //         return setSelected(null)
    //     }
    //
    //     setSelected(i)
    //
    //     console.log(i)
    // }

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(false)
        }

        setSelected(i)
    }



    return (
        <>

            <div className="wrapper">

                <div className="accordion">

                    {cenovnik.map((item, i) => {
                        return (
                            <div className="item">
                                <button className="title" onClick={() => toggle(i)}>{item.naslov}</button>

                                <ul className={`selected === i ? 'content show' : 'content'`}>

                                        {item.usluga.map((usl) => {
                                        return (
                                            <li ><p>{usl.vrsta}</p><p>{usl.cena}</p></li>
                                        )
                                        })}

                                </ul>

                            </div>
                        )
                    })}


                </div>

            </div>

        </>
    )
}

export default Cenovnik