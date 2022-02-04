import React, { useState, useEffect } from "react"

import { Avatar, Divider, Grid, Paper, Typography } from "@mui/material"

import { projects } from "../data/data"
import Layout from "../components/Layout"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import Seo from "../components/SEO"
import {
  paperBanner,
  sideAvatar,
  gridBanner,
  titleFont,
  descriptionFont,
  fullDivider,
  imageGrid,
  smallGrid,
} from "../styles/styles"
import "../styles/styles.css"

const Project = ({ data, location }) => {
  const [myProject, setMyProject] = useState(projects[0])
  const [myImages, setMyImages] = useState([])

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
  }, [location])
  if (myImages.length !== myProject.images.length) return <div></div>
  else {
    const { id, url, title, text } = myProject
    const newText = text[0].slice(0, 60)

    return (
      <Layout>
        <Seo title={title} description={newText} />
        <Grid item md={9} xs={12} sx={gridBanner}>
          <Paper variant="outlined" sx={paperBanner}>
            <Typography variant="h2" sx={titleFont}>
              Project {id} - {title}
              <Divider variant="fullWidth" sx={fullDivider} />
            </Typography>

            <Grid container spacing={2} sx={smallGrid}>
              <Grid item xs={2}>
                <Avatar sx={sideAvatar}>
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
                    <Typography variant="h4" sx={descriptionFont} key={index}>
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

              <Divider variant="fullWidth" sx={fullDivider} />
              <Grid item xs={12}>
                <Grid container spacing={2} sx={imageGrid}>
                  {myImages.map((image, index) => {
                    const pathToImage = getImage(image.gatsbyImageData)
                    return (
                      <Grid
                        item
                        md={4}
                        sm={12}
                        xs={12}
                        key={index}
                        sx={{ width: "100%", display: "flex" }}
                      >
                        <GatsbyImage
                          image={pathToImage}
                          alt={title}
                          objectFit="cover"
                          objectPosition="center"
                          className="webImage"
                        />
                      </Grid>
                    )
                  })}
                </Grid>
              </Grid>
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
