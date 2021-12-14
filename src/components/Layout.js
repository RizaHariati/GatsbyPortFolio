import { Container, Grid } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import "../styles/styles.css"

const Layout = ({ children }) => {
  return (
    <div className="mainBackground">
      <StaticImage
        src="../images/background.jpg"
        alt="background"
        className="gatsbyBackground"
      />
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          sx={{
            overflowY: "scroll",
            scrollbarWidth: "thin",
            scrollbars: "none",
            height: { md: "calc(100vh - 40px)", xs: "calc(100vh - 30px)" },
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
