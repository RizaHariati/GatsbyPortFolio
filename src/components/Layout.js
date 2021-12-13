import { Container, Grid, makeStyles } from "@material-ui/core"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

import Footer from "./Footer"
import Navbar from "./Navbar"
import "../styles/styles.css"

const useStyles = makeStyles(theme => {
  return {
    mainBackground: {
      position: "relative",
      width: "100vw",
      height: "100vh",
      paddingTop: 30,
    },
    gatsbyBackground: {
      position: "absolute",
      top: 0,
      bottom: "auto",
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: -10,
    },
    grid: {
      overflowY: "scroll",
      scrollbarWidth: "thin",
      scrollbars: "none",
      height: "calc(100vh - 40px)",
      [theme.breakpoints.down("sm")]: {
        height: "calc(100vh -30px)",
      },
    },
  }
})
const Layout = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.mainBackground}>
      <StaticImage
        src="../images/background.jpg"
        alt="background"
        className={classes.gatsbyBackground}
      />
      <Container maxWidth="lg">
        <Grid container spacing={2} className={classes.grid}>
          <Navbar />
          {children}
        </Grid>
        <Footer />
      </Container>
    </div>
  )
}

export default Layout
