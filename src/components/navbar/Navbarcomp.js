import React from 'react';
import { Link } from "react-router-dom"
import { FaBars } from 'react-icons/fa';
import { AiOutlineAlipayCircle } from 'react-icons/ai'
import { Gradient, Icon } from "../Stylecomp";


const Navbarcomp = () => {

  const myFunction = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


  return (
    <>
      <div className="topnav" id="myTopnav">
         <Link to="/" style={{ textDecoration: "none" }} className="logo-div">
          <div className="">
           <div style={{height:"140px",width:"280px" , backgroundImage:"url('/logo2.gif')",backgroundPosition:"center", backgroundSize:"cover", marginTop:"-40px", marginLeft:"-40px" ,marginBottom:"-40px",overflow:"hidden", borderRadius:"10px"}}></div>
          </div>
        </Link>
         <div className="alllinks">
          <Gradient>
            <Link to="/projects">Projects</Link>
            <Link to="/writing">Writing</Link>
            <Link to="#">About</Link>
          </Gradient>
        </div>
        <a href="#" className="icon" onClick={myFunction} >
          <div className='icons'><FaBars /></div>
        </a>
      </div>

    </>
  )
}

export default Navbarcomp