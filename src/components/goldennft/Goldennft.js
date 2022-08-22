import React from 'react'
import { Gradient, Bgcolor } from "../Stylecomp";

import Container from '../ObjConatner';
import { useMoralisWeb3Api, useMoralis } from "react-moralis";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player'
import axios from "axios"
const baseUri = "https://gateway.moralisipfs.com/ipfs/Qmbpt8TgAsJbCQmdNEUpEwsFJGLjqLmxQq5QvYaGXEVjL6/"

const Goldennft = () => {
  const { isInitialized } = useMoralis()
  const [detail, setdetail] = useState(null)
  const [loading, setLoading] = useState(false)
  const Web3Api = useMoralisWeb3Api();
  const { TokenId } = useParams()
  const Getnfts = async () => {
    const options = {
      chain: "rinkeby",
      address: "0xc1DbBEb311FE6728B578d9332991F70B95811B44",
      token_address: "0x4B63eAE97B90A750238449749976C572885faD64",
    };
    const polygonNFTs = await Web3Api.account.getNFTsForContract(options);
    console.log(polygonNFTs.result);
    var result = polygonNFTs.result.find(function (e) {
      console.log(TokenId, "tokkkkk")
      return e.token_id === TokenId;
    });
    let meta = await axios.get(result.token_uri)
    let data = { name: meta.data.name, description: meta.data.description, image: meta.data.image, video: baseUri + meta.data.properties.vide, image2: meta.data.properties.image2, image3: meta.data.properties.image3, obj: "https://gateway.moralisipfs.com/ipfs/Qmbpt8TgAsJbCQmdNEUpEwsFJGLjqLmxQq5QvYaGXEVjL6/" + meta.data.properties.obj }
    console.log(data)
    setLoading(false)
    setdetail(data)
  };

  useEffect(() => {
    setLoading(true)
    setdetail(null)
    if (isInitialized) {
      Getnfts()
    }

  }, [isInitialized])
  if (detail !== null && !loading) {
    return (
      <>
        <div className="Goldennft-container">
          <div className="Goldennft-content">
            <div className="nft-video-container">
              <div className="gif-div">
                <ReactPlayer controls url={detail.video} />

              </div>

              <div className="child-nft-img">
                <div className="child-nft-div">
                  <img src={detail.image} alt="" />
                </div>

                <div className="child-nft-div">
                  <img src={detail.image2} alt="" />
                </div>

                <div className="child-nft-div">
                  <img src={detail.image2} alt="" />
                </div>
              </div>
            </div>

            <div className="nft-desc-container">
              <Container link2={detail.obj} />
              <div className="nft-desc-content" style={{ marginTop: "30px" }}>
                <div className="nft-heading">
                  <Gradient>{detail.name}</Gradient>
                </div>

                <div className="nft-desc">
                  <p>{detail.description} <a href={`https://testnets.opensea.io/assets/rinkeby/0x4b63eae97b90a750238449749976c572885fad64/${TokenId}`}>Sea on opensea</a></p>
                </div>
                <div className="nft-property-content">
                  <div className="nft-heading2">
                    <Gradient>Property</Gradient>
                  </div>

                  <div className="nft-property">
                    <div className="name-div">
                      <p>Name</p>
                      <Gradient>Value</Gradient>
                    </div>
                    <div className="name-div">
                      <p>Name</p>
                      <Gradient>Value</Gradient>
                    </div>
                    <div className="name-div">
                      <p>Name</p>
                      <Gradient>Value</Gradient>
                    </div>
                    <div className="name-div">
                      <p>Name</p>
                      <Gradient>Value</Gradient>
                    </div>
                    <div className="name-div">
                      <p>Name</p>
                      <Gradient>Value</Gradient>
                    </div>
                    <div className="name-div">
                      <p>Name</p>
                      <Gradient>Value</Gradient>
                    </div>
                  </div>

                  <div className="nft-buy">
                    <Bgcolor>Buy Now</Bgcolor>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  else if (detail === null && loading) {
    return (
      <h1>loading</h1>

    )
  }
  else {
    return (<h1>error</h1>)
  }
}

export default Goldennft

