import React from 'react'
import Features from '../components/features/Features'
import Team from '../components/team/Team'
import Navbarcomp from '../components/navbar/Navbarcomp'
import Banner from '../components/banner/Banner'
import Goldensea from '../components/goldensea/Goldensea'
import Footer from '../components/footer/Footer'
import GetInTouch from '../components/getintouch/GetInTouch'
import Goldennft from '../components/goldennft/Goldennft'

const Detail = () => {
  return (
    <>
      <Navbarcomp />
      <Banner />
      <Goldensea />
      <Goldennft />
      <Features />
      <Team />
      <GetInTouch />
      <Footer />
    </>
  )
}

export default Detail