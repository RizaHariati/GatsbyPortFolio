import React from "react"
import { Avatar, Divider, Grid, Paper, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { aboutData } from "../data/data"
import Seo from "../components/SEO"
import {
  paperBanner,
  sideAvatar,
  gridBanner,
  titleFont,
  descriptionFont,
} from "../styles/styles"

const smallGrid = {
  width: "100%",
  paddingInline: { xs: 0, sm: 2, md: 4 },
}

const useStyles = makeStyles(theme => {
  return {
    about: {
      letterSpacing: "normal",
      fontWeight: "300",
      width: "100%",
      fontSize: "20px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "18px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "16px",
      },
    },
  }
})

const About = () => {
  const classes = useStyles()

  return (
    <Layout>
      <Seo title="About" />
      <Grid item md={9} xs={12} sx={gridBanner}>
        <Paper variant="outlined" sx={paperBanner}>
          <Typography variant="h2" sx={titleFont}>
            About
          </Typography>

          <Divider variant="fullWidth" style={{ width: "100%" }} />
          <Grid container spacing={4} sx={smallGrid}>
            <Grid item xs={2}>
              <Avatar sx={sideAvatar}>
                <StaticImage
                  src="../images/MyPhoto.jpg"
                  alt="myPhoto"
                  width={200}
                  height={200}
                  objectFit="cover"
                  objectPosition="center"
                />
              </Avatar>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="h3" sx={descriptionFont}>
                It was June 2020 when I first decided to start learning
                programming and this website is dedicated to show you what I've
                learned so far.
              </Typography>
            </Grid>
            {aboutData.map(data => {
              const { id, title, tools } = data
              return (
                <Grid container spacing={1} key={id}>
                  <Grid item xs={12}>
                    <Typography variant="h3">{title}</Typography>
                  </Grid>
                  <Divider variant="fullWidth" style={{ width: "100%" }} />
                  <Grid container spacing={0}>
                    {tools.map((tool, index) => {
                      return (
                        <Grid item md={3} sm={4} xs={6} key={index}>
                          <Typography variant="body1" sx={descriptionFont}>
                            {tool}
                          </Typography>
                        </Grid>
                      )
                    })}
                  </Grid>
                </Grid>
              )
            })}
          </Grid>
        </Paper>
      </Grid>
    </Layout>
  )
}

export default About
