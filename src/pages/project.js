import React, { useState, useEffect } from "react"

import {
  Avatar,
  Divider,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core"
import { projects } from "../data/data"
import Layout from "../components/Layout"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
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
    imageGrid: {
      width: "100%",
      margin: "auto",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    image: {
      width: "fit-content",
      margin: "auto",
      borderRadius: theme.shape.borderRadius,
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
  }
})

const Project = ({ data, location }) => {
  const [myProject, setMyProject] = useState(projects[0])
  const [myImages, setMyImages] = useState([])
  const classes = useStyles()

  const allImages = data.allImageSharp.nodes
  useEffect(() => {
    const getID = async () => {
      const projectID = await location.state.myProp
      setMyImages([])
      const newProject = await projects.find(
        project => project.id === projectID
      )
      await setMyProject(newProject)
      const newImages = await newProject.images

      allImages.forEach(image => {
        newImages.forEach(newImage => {
          if (
            image.gatsbyImageData.images.sources[0].srcSet.includes(newImage)
          ) {
            setMyImages(prev => [...prev, image])
          }
        })
      })
    }
    getID()
    // eslint-disable-next-line
  }, [projectID])
  if (myImages.length !== myProject.images.length) return <div></div>
  else {
    const { id, url, title, text } = myProject
    const newText = text[0].slice(0, 60)

    return (
      <Layout>
        <Seo title={title} description={newText} />
        <Grid item md={9} xs={12} className={classes.grid}>
          <Paper variant="outlined" className={classes.paper}>
            <Typography variant="h2" align="left" style={{ width: "100%" }}>
              Project {id} - {title}
            </Typography>

            <Divider variant="fullWidth" style={{ width: "100%" }} />
            <Grid container spacing={4} className={classes.smallGrid}>
              <Grid item xs={2}>
                <Avatar className={classes.myPhoto}>
                  <StaticImage
                    src="../images/MyPhoto.jpg"
                    alt="myPhoto"
                    placeholder="tracedSVG"
                    width={200}
                    height={200}
                    objectFit="cover"
                    objectPosition="center"
                  />
                </Avatar>
              </Grid>
              <Grid item xs={10}>
                {text.map((item, index) => {
                  return (
                    <Typography
                      variant="h3"
                      className={classes.about}
                      align="left"
                      key={index}
                    >
                      {item}
                    </Typography>
                  )
                })}
                <a href={url}>
                  <Typography variant="h4" color="secondary">
                    Visit Website
                  </Typography>
                </a>
              </Grid>

              <Divider variant="fullWidth" style={{ width: "100%" }} />

              {myImages.map((image, index) => {
                const pathToImage = getImage(image.gatsbyImageData)
                return (
                  <Grid
                    item
                    md={4}
                    sm={6}
                    xs={12}
                    key={index}
                    className={classes.imageGrid}
                  >
                    <GatsbyImage
                      image={pathToImage}
                      alt={title}
                      className={classes.image}
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </Grid>
                )
              })}
            </Grid>
          </Paper>
        </Grid>
      </Layout>
    )
  }
}

export default Project

export const result = graphql`
  query projectImages {
    allImageSharp {
      nodes {
        gatsbyImageData(placeholder: DOMINANT_COLOR, layout: CONSTRAINED)
      }
    }
  }
`
