import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/HotAcsessoriesMenu.css"
const HotAcsessoriesMenu = () => {
  return (
    <div className="HotAcsessoriesMenu">
         <Link className="HotAcsessoriesLink"to="/music" >Music Store </Link>
         <Link className="HotAcsessoriesLink"to="/smartDevice" >Smart Devices </Link>
         <Link className="HotAcsessoriesLink"to="/home" >Home </Link>
         <Link className="HotAcsessoriesLink"to="/lifestyle" >Lifestyle</Link>
         <Link className="HotAcsessoriesLink"to="/mobileAccessories" >Mobile Accessories </Link>


    </div>
  )
}

export default HotAcsessoriesMenu