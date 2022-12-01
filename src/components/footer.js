import React from "react"
import {Link} from "gatsby"
import { RiHeart2Line } from "react-icons/ri";

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <p><strong><Link to="/">Club pigalle</Link></strong>, gjord med <span className="icon -love"><RiHeart2Line/></span> ©2022</p>
    </div>
  </footer>
)

export default Footer