import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Grid, Stack, Container } from '@mui/material'
import { SubHeading, TextFieldstyled, Buttonstyled } from '../styles'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import { AiOutlineDribbble } from 'react-icons/ai'


import './Footer.css'

const data = [
    {
        heading: "Information",
        name: [
            {
                link: "#",
                name: "Products"
            },
            {
                link: "#",
                name: "Services"
            },
            {
                link: "#",
                name: "Benefits"
            },
            {
                link: "#",
                name: "Developers"
            },],
    },
    {
        heading: "About",
        name: [
            {
                link: "#",
                name: "Contact Us"
            },
            {
                link: "#",
                name: "DeliveryInformation"
            },
            {
                link: "#",
                name: "Privacy Policy"
            },
            {
                link: "#",
                name: "Terms and Conditions"
            },
        ]
    }
]


const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#2d2d2d', p: 7 }}>
            <Container sx={{ ml: "0 auto", pl: 10 }}>
                <Grid container>
                    <Grid item sx={6} md={3}>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <SubHeading>
                                Stay Posted
                            </SubHeading>
                            <Box>
                                <TextFieldstyled sx={{width:"auto"}} placeholder="Tell us your Email" variant="outlined" />
                            </Box>
                            <Buttonstyled sx={{ width: "50%" }}>
                                Subscribe
                            </Buttonstyled>
                        </Box>
                    </Grid>
                    <Grid item sx={6} md={3}>
                        <Box sx={{ width: '70%' }}>
                            <SubHeading >
                                Follow
                            </SubHeading>
                            <SubHeading sx={{ fontSize: 14 }}>
                                A free landing page theme with video background
                            </SubHeading>
                            <Stack className="stack-images" direction='row' spacing={1}>
                                <TwitterIcon />
                                <FacebookRoundedIcon />
                                <AiOutlineDribbble />
                            </Stack>
                        </Box>
                    </Grid>
                    {data.map((data) => (
                        <Grid item sx={6} md={3}>
                            <Box>
                                <SubHeading>
                                    {data.heading}
                                </SubHeading>
                            </Box>
                            <Stack>
                                {data.name.map((name) => (
                                    <Box>
                                        <Link to={name.link} style={{ textDecoration: "none" }}>
                                            <SubHeading sx={{ fontSize: 14, m: 0, width: "100%" }}>
                                                {name.name}
                                            </SubHeading>
                                        </Link>
                                    </Box>
                                ))}
                            </Stack>
                        </Grid>
                    ))}



                </Grid>
            </Container>
        </Box>
    )
}

export default Footer