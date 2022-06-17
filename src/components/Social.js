import { Typography, Avatar } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import "../styles/styles.css"
import { social } from "../styles/styles"
import { GitHub } from "@mui/icons-material"

const Social = () => {
  return (
    <div className="socialContainer">
      <div className="socials">
        <a className="social-btn" href="https://github.com/RizaHariati">
          <Avatar variant="square" sx={social}>
            <GitHub />
          </Avatar>
        </a>
        <a href="https://www.instagram.com/rizahariati/?hl=en">
          <Avatar variant="square" sx={social}>
            <StaticImage src="../images/instagram.svg" alt="instagram" />
          </Avatar>
        </a>
        <a href="https://www.linkedin.com/in/riza-hariati-2021/">
          <Avatar variant="square" sx={social}>
            <StaticImage src="../images/linkedin.svg" alt="linkedin" />
          </Avatar>
        </a>
      </div>
      <Typography variant="body2" align="center">
        Powered by GatsbyJS
      </Typography>
    </div>
  )
}

export default Social
