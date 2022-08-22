import React from 'react'
import { Box, Container, Grid } from '@mui/material'
import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import { Headingmain, SubHeading, Text, Dividerstyled } from '../styles'
import './Feature.css'


const data = [
  {
    heading: 'WHAT YOU WILL GET',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque possimus reiciendis dolores et, corrupti perferendis quia nihil, tenetur sint adipisci odio ullam alias nostrum cum voluptatibus quasi repellendus architecto eveniet. Aut obcaecati, culpa nobis velit, ratione aspernatur quo eum tempora, officia temporibus consectetur similique eveniet ea dolor laboriosam inventore repellat!',
    image: <ElectricBoltOutlinedIcon />,
  },
  {
    heading: 'YOU WILL BE ABLE TO SAVE ASSET OFFLINE',
    paragraph: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero voluptates illo quaerat nesciunt expedita hic maiores dolorum. Excepturi nulla cum quisquam eveniet, animi temporibus blanditiis. Fugiat soluta sit quibusdam molestias asperiores ducimus reiciendis, minus architecto sed iusto maiores nesciunt odio nisi eum tempore adipisci, recusandae optio obcaecati omnis sunt iure.',
    image: <CloudDownloadOutlinedIcon />,
  },
  {
    heading: 'Unique',
    paragraph: "Because you don't want your Bootstrap site, to look like a Bootstrap site.",
    image: <AcUnitOutlinedIcon />,
  },
  {
    heading: 'Popular',
    paragraph: "There's good reason why Bootstrap is the most used frontend framework in the world.",
    image: <FavoriteBorderOutlinedIcon />,
  },
  {
    heading: 'Tested',
    paragraph: "Bootstrap is matured and well-tested. It's a stable codebase that provides consistency.",
    image: <ScienceOutlinedIcon />,
  },
]


const Features = () => {
  return (
    <Box sx={{ backgroundColor: "#222" }}>
      <Container component="section" sx={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center', p: 5 }}>

        <Box>
          <Headingmain>
            Features
          </Headingmain>
        </Box>

        <Dividerstyled />
        <Box sx={{ pt: 5, maxWidth: '70%' }}>
          {data.map((data, idx) => (
            <>
              <Box className="Box_container" >
                <SubHeading>
                  {data.heading}
                </SubHeading>
                <Grid container sx={{ flexDirection: idx % 2 === 1 ? "row-reverse" : "row" }} >
                  <Grid item xs={12} md={9}>
                    <Box className="image_container">
                      <Text>
                        {data.paragraph}
                      </Text>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Box className="image_container">
                      {data.image}
                    </Box>
                  </Grid>
                </Grid>

              </Box>
              <Box sx={{ display: "flex", justifyContent: 'center' }}>
                <Box>
                  <Dividerstyled />
                </Box>
              </Box>
            </>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default Features