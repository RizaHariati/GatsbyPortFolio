import React from "react"
import {
  Avatar,
  Divider,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { aboutData } from "../data/data"
import Seo from "../components/SEO"

const useStyles = makeStyles(theme => {
  return {
    grid: {
      height: "100%",
      width: "100%",

      [theme.breakpoints.down("sm")]: {
        height: "85%",
        width: "100%",
      },
    },
    paper: {
      height: "fit-content",
      minHeight: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      rowGap: 5,
      padding: 20,
      [theme.breakpoints.down("sm")]: {
        padding: 5,
      },
    },
    smallGrid: {
      width: "100%",
      paddingInline: 20,

      [theme.breakpoints.down("sm")]: {
        paddingInline: 10,
      },
      [theme.breakpoints.down("xs")]: {
        paddingInline: 0,
      },
    },
    myPhoto: {
      height: "100px",
      width: "100px",
      border: "2px solid white",
      [theme.breakpoints.down("sm")]: {
        height: "70px",
        width: "70px",
      },
      [theme.breakpoints.down("sm")]: {
        height: "40px",
        width: "40px",
      },
    },
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
      <Grid item md={9} xs={12} className={classes.grid}>
        <Paper variant="outlined" className={classes.paper}>
          <Typography variant="h2" align="left" style={{ width: "100%" }}>
            About
          </Typography>

          <Divider variant="fullWidth" style={{ width: "100%" }} />
          <Grid container spacing={4} className={classes.smallGrid}>
            <Grid item xs={2}>
              <Avatar className={classes.myPhoto}>
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
              <Typography variant="h3" className={classes.about} align="left">
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
                  {tools.map((tool, index) => {
                    return (
                      <Grid item md={3} sm={4} xs={6} key={index}>
                        <Typography variant="body1">{tool}</Typography>
                      </Grid>
                    )
                  })}
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
