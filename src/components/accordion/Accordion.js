import React,  { useState } from 'react'
import { HiOutlineChevronDown } from "react-icons/hi2";
import "./accord.scss"
import cenovnik from "../../cenovnik.json";


const Accordion = ( ) => {

        const [selected, setSelected] = useState(null)

        const toggle = (i) => {
            if (selected === i) {
                return setSelected(null)
            }
            setSelected(i)
        }

    return (

        <div className="omotac">
            {cenovnik.map((item, i) => {
                return (
                    <div className={`accordion ${selected === i ? "uncollapsed" : "collapsed"}`}>
                        <button onClick={() => toggle(i)}>{item.naslov} <HiOutlineChevronDown className='strelica' /></button>

                        <ul className="accordion-panel">
                            {item.usluga.map((usl) => {
                                return (
                                    <li className="list-item" ><p>{usl.vrsta}</p><p>{usl.cena} KM</p></li>
                                )
                            })}
                         </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default Accordion
