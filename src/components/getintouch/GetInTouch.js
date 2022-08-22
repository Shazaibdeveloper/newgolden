import React from 'react'
import { Box, Container, Grid } from '@mui/material'
import { Headingmain, Text, Dividerstyled, TextFieldstyled, TextFieldBigstyled, Buttonstyled } from '../styles'
import SendIcon from '@mui/icons-material/Send';


const GetInTouch = () => {
  return (
    <Box sx={{ backgroundColor: "#222" }}>
      <Container varient="section">
        <Box sx={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center', p: 5 }}>
          <Box>
            <Headingmain>
              Get in Touch
            </Headingmain>
          </Box>

          <Dividerstyled />

          <Box>
            <Text>
              We love feedback. Fill out the form below and we'll get back to you as soon as possible.
            </Text>
          </Box>

          <Container sx={{p:5}}>
            <Grid container spacing={2}>
              <Grid item sx={12} md={4} >
                <TextFieldstyled placeholder='Name' />
              </Grid>
              <Grid item sx={12} md={4} >
                <TextFieldstyled placeholder='Email' />
              </Grid>
              <Grid item sx={12} md={4} >
                <TextFieldstyled placeholder='Phone' />
              </Grid>
              <Grid item sx={12} md={12} >
                <TextFieldBigstyled placeholder='Your Message Here' />
              </Grid>
            </Grid>
          </Container>
          <Buttonstyled className="textbox" sx={{ width: "15%" }} endIcon={<SendIcon />}>
            Send
          </Buttonstyled>
        </Box>
      </Container>
    </Box>
  )
}

export default GetInTouch