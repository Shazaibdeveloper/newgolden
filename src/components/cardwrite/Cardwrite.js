import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import thumbnail from '../images/thumbnail.png'
import { Para } from '../Stylecomp'


const cardapi = [
    {
        thumbnail: thumbnail,
        heading: 'Yuga Labs Acquires CryptoPunks and Meebits',
        para: 'Yuga Labs has acquired the IP of the CryptoPunks and Meebits,will transfer IP rights to individual token holders.'
    },
    {
        thumbnail: thumbnail,
        heading: 'Yuga Labs Acquires CryptoPunks and Meebits',
        para: 'Yuga Labs has acquired the IP of the CryptoPunks and Meebits,will transfer IP rights to individual token holders.'
    },
    {
        thumbnail: thumbnail,
        heading: 'Yuga Labs Acquires CryptoPunks and Meebits',
        para: 'Yuga Labs has acquired the IP of the CryptoPunks and Meebits,will transfer IP rights to individual token holders.'
    },
    {
        thumbnail: thumbnail,
        heading: 'Yuga Labs Acquires CryptoPunks and Meebits',
        para: 'Yuga Labs has acquired the IP of the CryptoPunks and Meebits,will transfer IP rights to individual token holders.'
    },
    {
        thumbnail: thumbnail,
        heading: 'Yuga Labs Acquires CryptoPunks and Meebits',
        para: 'Yuga Labs has acquired the IP of the CryptoPunks and Meebits,will transfer IP rights to individual token holders.'
    },
    {
        thumbnail: thumbnail,
        heading: 'Yuga Labs Acquires CryptoPunks and Meebits',
        para: 'Yuga Labs has acquired the IP of the CryptoPunks and Meebits,will transfer IP rights to individual token holders.'
    }
]

const Cardwrite = () => {
    const navigate=useNavigate()
    const [cards, setcards] = useState(cardapi)

    function handleSubmit() {
        navigate('../blog', { replace:  true })
    }


    return (
        <>
            <div className="mega-card-container">


                {
                    cards.map((prop) => {

                        const { thumbnail, heading, para } = prop;
                        return (
                            <>

                                <div class="card-container" onClick={handleSubmit}>
                                    <img src={thumbnail} alt="Avatar" style={{ width: '100%' }} />
                                    <div class="card-content">
                                        <h4><b>{heading}</b></h4>
                                        <p>{para}</p>
                                    </div>
                                </div>

                            </>
                        )
                    })
                }

            </div>
        </>
    )
}

export default Cardwrite