import React from 'react'
import { Bgcolor } from "../Stylecomp";


const Banner = () => {
  return (
    <>
      <div className="Banner">

        <div className="Banner-Content" id="content-of-banner">


          <div className="golden-head">
            <h1 id="newid">Golden Sea</h1>
          </div>

          <div className="golden-para">
            <p>A free landing page theme with video background</p>
          </div>

          <div className="two-btn">
            <div className="toggle-btn">
              <Bgcolor href="#" className="L1">Toggle Video</Bgcolor>
            </div>
            <div className="start-btn">
              <Bgcolor href="#" className="L2">Get Started</Bgcolor>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default Banner