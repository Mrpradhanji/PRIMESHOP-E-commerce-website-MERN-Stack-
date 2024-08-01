import React from 'react'
import LOGO from "../assest/LOGO.png"
const Logo = ({w,h}) => {
  return (
   <img src={LOGO} alt='logo' width={w} height={h}/>
  )
}

export default Logo