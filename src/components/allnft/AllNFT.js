import React from 'react'
import { Box, CircularProgress, Container, Grid } from '@mui/material'
import { Headingmain, Dividerstyled, SubHeading, Buttonstyled } from '../styles'
import {Bgcolor } from '../Stylecomp'


import {Link} from "react-router-dom"
import './AllNFT.css'
import axios from 'axios'
import { useMoralisWeb3Api,useMoralis } from "react-moralis"
import { useState,useEffect } from 'react'
const AllNFT = () => {
    const{isInitialized}=useMoralis()
   
    const Web3Api = useMoralisWeb3Api();
    const[loading, setLoading]=useState(true)
    const [allNfts,setAllnfts]=useState([])
    const Getnfts = async () => {
        const options = {
          chain: "rinkeby",
          address: "0xc1DbBEb311FE6728B578d9332991F70B95811B44",
          token_address: "0x4B63eAE97B90A750238449749976C572885faD64",
        };
        const polygonNFTs = await Web3Api.account.getNFTsForContract(options);
        console.log(polygonNFTs);
        
        const results =polygonNFTs.result.filter(element => {
            return element.token_uri != undefined;
          });
          console.log(results)

        const items = await Promise.all(results.map(async i => {

           
                try {
                    const tokenUri = i.token_uri
                    const meta = await axios.get(tokenUri)
                  
                    let item = {
                      tokenId: i.token_id,
                      image:meta.data.image,
                      name: meta.data.name,
                      descrition: meta.data.description,
                    }
                    return item
                    } catch (error) {
                        console.log(error)
                        polygonNFTs.result.splice(0,i)
                    } 
            
          }))
        console.log(items)
        setAllnfts(items)
        setLoading(false)
      };
useEffect(()=>{
    setAllnfts([])
    setLoading(true)
    if (isInitialized) {
        Getnfts()
    }
    console.log(isInitialized)
   
},[isInitialized])

   if(allNfts && !loading){
    return (
        <Box sx={{ backgroundColor: "#222" }}>
            <Container component="section" sx={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center', p: 5 }}>

                <Box>
                    <Headingmain>
                        ALL NFTS GOLD
                    </Headingmain>
                </Box>
                <Dividerstyled />
                <Grid container spacing={3}>
                    {allNfts.map((data) => (
                        <Grid item xs={12} md={4} key={data.tokenId}>
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src={"https://gateway.moralisipfs.com/ipfs/Qmbpt8TgAsJbCQmdNEUpEwsFJGLjqLmxQq5QvYaGXEVjL6/0a.jpg"} alt="Avatar" />
                                    </div>
                                    <div className="flip-card-back">
                                        <img src={"https://gateway.moralisipfs.com/ipfs/Qmbpt8TgAsJbCQmdNEUpEwsFJGLjqLmxQq5QvYaGXEVjL6/0a.jpg"} alt="Avatar" />
                                        <Headingmain>{data.name}</Headingmain>
                                        <SubHeading>{data.descrition.slice(0,40)}..</SubHeading>
                                        <Bgcolor className='flipcard-anchor'>  <Link to={`/detail/${data.tokenId}`} className="bg-gradient">VIEW</Link></Bgcolor>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Container >

        </Box>
    )}
    else if(loading && !allNfts){
       return(
        <CircularProgress/>
       )
    }
    else{
        return(
        <>
        <h1>error</h1>
        </>)
    }
}

export default AllNFT