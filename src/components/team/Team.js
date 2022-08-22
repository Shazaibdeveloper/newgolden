import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Container, Stack, Avatar, Grid, Card, CardMedia, CardContent } from '@mui/material'
import { Headingmain, SubHeading, Buttonstyled, Dividerstyled, Text } from '../styles'
import { Bgcolor } from '../Stylecomp'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import './Team.css'

const cards = [
  {
    img: "https://cdn.pixabay.com/photo/2022/07/02/13/48/man-7297322_960_720.jpg",
    name: "Jhon Doe",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit"

  },
  {
    img: "https://cdn.pixabay.com/photo/2022/07/02/13/48/man-7297322_960_720.jpg",
    name: "Jhon Doe",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit"

  },
  {
    img: "https://cdn.pixabay.com/photo/2022/07/02/13/48/man-7297322_960_720.jpg",
    name: "Jhon Doe",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit"

  },
  {
    img: "https://cdn.pixabay.com/photo/2022/07/02/13/48/man-7297322_960_720.jpg",
    name: "Jhon Doe",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit"

  },
  {
    img: "https://cdn.pixabay.com/photo/2022/07/02/13/48/man-7297322_960_720.jpg",
    name: "Jhon Doe",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit"

  },
  {
    img: "https://cdn.pixabay.com/photo/2022/07/02/13/48/man-7297322_960_720.jpg",
    name: "Jhon Doe",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit"

  },
  {
    img: "https://cdn.pixabay.com/photo/2022/07/02/13/48/man-7297322_960_720.jpg",
    name: "Jhon Doe",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit"

  },
  {
    img: "https://cdn.pixabay.com/photo/2022/07/02/13/48/man-7297322_960_720.jpg",
    name: "Jhon Doe",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit"

  },
]

const Team = () => {
  return (
    <Box sx={{ backgroundColor: "#171717" }}>
      <Container component="section" sx={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center', p: 5 }}>

        <Box>
          <Headingmain>
            Team Gold
          </Headingmain>
        </Box>

        <Box>
          <Link to="/explore" style={{ textDecoration: "none", width: "15%" }}>
            <Buttonstyled className="textbox" >
              Explore
            </Buttonstyled>
          </Link>
        </Box>
        <Dividerstyled />
        <Box>
          <Text>
            TEAM GOLD
          </Text>
        </Box>
        <Grid container spacing={4}>
          {cards.map((card, i) => (
            <Grid item key={i} xs={12} sm={4} md={3}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: 'transparent', boxShadow: "none" }}
              >
                <CardMedia
                  component="img"
                  image={card.img}
                  alt={card.name}
                  sx={{ borderRadius: '50%' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column" }}>

                    <SubHeading gutterBottom>
                      {card.name}
                    </SubHeading>
                    <Text>
                      {card.description}
                    </Text>
                    <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                      <Avatar sx={{ bgcolor: 'transparent' }}>
                        <LinkedInIcon fontSize='medium' className="avt" />
                      </Avatar>
                      <Avatar sx={{ bgcolor: 'transparent' }}>
                        <TwitterIcon fontSize='medium' className="avt" />
                      </Avatar>
                      <Avatar sx={{ bgcolor: 'transparent' }}>
                        <FacebookRoundedIcon fontSize='medium' className="avt" />
                      </Avatar>
                      <Avatar sx={{ bgcolor: 'transparent' }}>
                        <GitHubIcon fontSize='medium' className="avt" />
                      </Avatar>
                    </Stack>

                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box >
  )
}

export default Team