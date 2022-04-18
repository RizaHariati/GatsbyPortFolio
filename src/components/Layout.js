import { Container, Grid } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { makeStyles } from "@mui/styles"
import Footer from "./Footer"
import Navbar from "./Navbar"
import "../styles/styles.css"

const useStyles = makeStyles({
  mainBackground: {
    position: "relative",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    paddingTop: 30,
  },
  gatsbyBackground: {
    position: "absolute",
    top: 0,
    bottom: "auto",
    left: 0,
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    resize: "vertical",
    zIndex: -10,
  },
})
const Layout = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.mainBackground}>
      <StaticImage
        src="../images/background.jpg"
        alt="background"
        layout="constrained"
        className={classes.gatsbyBackground}
      />
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ md: 2, xs: 1 }}
          sx={{
            // overflowY: "scroll",

            scrollbarWidth: "thin",
            scrollbars: "none",
            height: { md: "calc(100vh - 45px)", xs: "calc(100vh - 30px)" },
          }}
        >
          <Navbar />
          {children}
        </Grid>
        <Footer />
      </Container>
    </div>
  )
}

export default Layout
