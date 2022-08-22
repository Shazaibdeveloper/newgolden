import React from 'react'
import { Gradient, Bgcolor } from "../Stylecomp";
import vid from '../images/new.gif'
import img from '../images/nft.webp'
import Container from '../ObjConatner';
import { BorderColor } from '@mui/icons-material';
const Fullpack = () => {
  return (
    <>
      <div className="Goldennft-container">
        <div className="Goldennft-content">
          <div className="nft-video-container">
            <div className="gif-div">
              <img src={vid} />
            </div>

            <div className="child-nft-img">
              <div className="child-nft-div">
                <img src={img} alt="" />
              </div>

              <div className="child-nft-div">
                <img src={img} alt="" />
              </div>

              <div className="child-nft-div">
                <img src={img} alt="" />
              </div>
            </div>
          </div>

          <div className="nft-desc-container">
            <Container Link2 ="//gateway.pinata.cloud/ipfs/QmPhSriY3UkJDALHMSwx1mJe6pbDNJpWFqZo5hHWPSrZaf"/>
            </div>
           
          
        </div>

        <div className="Goldennft-content nft-desc-con">
        <div className="nft-desc-content" style={{marginTop:"30px"}}>
              <div className="nft-heading">
                <Gradient>Gold NFT #03</Gradient>
              </div>

              <div className="nft-desc">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Vel eveniet magni libero perspiciatis eum inventore reprehenderit
                  in illum eius autem, iusto esse. Ea, tenetur! Alias similique
                  suscipit animi saepe accusamus, quos, nisi est sit provident
                  perspiciatis, dignissimos expedita! Eum earum,in nostrum quibusdam
                  dolorem nesciunt laborum ducimus delectus maiores reiciendis!</p>
              </div>
            </div>
            </div>
      </div>
    </>
  )
}

export default Fullpack