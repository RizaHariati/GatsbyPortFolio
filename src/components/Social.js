import { Typography, Avatar } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { makeStyles } from "@mui/styles"

const social = {
  background: "transparent",
  width: 40,
  height: 40,
}
const useStyles = makeStyles(theme => {
  return {
    socialContainer: {
      display: "flex",
      flexDirection: "column",
      rowGap: 10,
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    socials: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      columnGap: theme.spacing(2),
    },
  }
})

const Social = () => {
  const classes = useStyles()
  return (
    <div className={classes.socialContainer}>
      <div className={classes.socials}>
        <a className="social-btn" href="https://github.com/RizaHariati">
          <Avatar variant="square" sx={social}>
            <StaticImage src="../images/github.svg" alt="github" />
          </Avatar>
        </a>
        <a href="https://www.instagram.com/rizahariati/?hl=en">
          <Avatar variant="square" sx={social}>
            <StaticImage src="../images/instagram.svg" alt="instagram" />
          </Avatar>
        </a>
        <a href="https://www.linkedin.com/in/riza-hariati-2021/">
          <Avatar variant="square" sx={social} s>
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
