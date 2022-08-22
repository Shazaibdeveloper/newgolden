import React from 'react'
import Features from '../components/features/Features'
import Team from '../components/team/Team'
import Navbarcomp from '../components/navbar/Navbarcomp'
import Banner from '../components/banner/Banner'
import Goldensea from '../components/goldensea/Goldensea'
import Footer from '../components/footer/Footer'
import GetInTouch from '../components/getintouch/GetInTouch'
import Fullpack from '../components/goldennft/Fullpack'

const Home = () => {
  return (
    <>
      <Navbarcomp />
      <Banner />
      <Goldensea />
      <Fullpack/>
      <Features />
      <Team />
      <GetInTouch />
      <Footer />
    </>
  )
}

export default Home