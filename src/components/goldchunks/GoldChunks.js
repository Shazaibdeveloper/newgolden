import React from 'react'
import { Box, Container, Grid } from '@mui/material'
import { Headingmain, Dividerstyled, Buttonstyled, SubHeading } from '../styles'
import { Link } from 'react-router-dom'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import './GoldChunks.css'


const GoldChunks = () => {
    return (
        <Box sx={{ backgroundColor: "#222" }}>
            <Container component="section" sx={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center', p: 5 }}>

                <Box>
                    <Headingmain>
                        All Gold Chunks
                    </Headingmain>
                </Box>
                <Dividerstyled />
            </Container >
            <Box>
                <Grid container>
                    <Grid item xs={12} md={4}>
                        <Box className='Chunks'>
                            <Box className="chunktext">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                </p>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box className='Chunks'>
                            <Box className="chunktext">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                </p>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box className='Chunks'>
                            <Box className="chunktext">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                </p>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center', p: 5 }}>
                <Box>
                    <Link to="/explore" style={{ textDecoration: "none", width: "15%" }}>
                        <Buttonstyled className="textbox" >
                            Explore
                        </Buttonstyled>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default GoldChunks