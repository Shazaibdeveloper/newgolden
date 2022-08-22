import React, { useState } from 'react'
import { MdOutlineLaptopWindows } from 'react-icons/md'
import { DiSass } from 'react-icons/di'
import { AiOutlineStar } from 'react-icons/ai'
import { Gradienthead, Bgcolor } from "../Stylecomp";


const Flexibleapi = [
    {
        icon: <MdOutlineLaptopWindows />,
        heading: 'We are selling whole pack',
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',

    },
    {
        icon: <DiSass />,
        heading: 'Unique in Nft universe',
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',

    },
    {
        icon: <AiOutlineStar />,
        heading: 'Consistent',
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',

    },
]

const Flexible = () => {

    const [Flexible, setFlexible] = useState(Flexibleapi);




    return (
        <>
            <div className="Flexible-Container">
                <div className="Flexible-Content">


                    {Flexible.map((prop) => {

                        const { icon, heading, para } = prop;

                        return (
                            <>
                                <div className="Flexible-div-1 Same-Flexible-div">
                                    <div className="flexible-icon"><Gradienthead>{icon}</Gradienthead></div>
                                    <div className="flexible-heading"> <Gradienthead>{heading}</Gradienthead></div>
                                    <div className="flexible-para"> <p>{para}</p></div>
                                </div>
                            </>
                        )
                    })}






                </div>
            </div>
        </>
    )
}

export default Flexible