import React from "react"
import {
  Avatar,
  Button,
  ButtonGroup,
  Card,
  CardActionArea,
  CardActions,
  Grid,
  Paper,
  Typography,
} from "@mui/material"

import Layout from "../components/Layout"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"
import { projects } from "../data/data"
import Seo from "../components/SEO"
import { gridBanner, paperBanner, cardActions } from "../styles/styles"

const card = {
  maxWidth: 250,
  alignItems: "center",
  margin: "auto",
  backgroundColor: "#4b4b4a42",
  borderColor: "transparent",
}

const Index = ({ data }) => {
  const allImages = data.allImageSharp.nodes
  const newProjects = projects.slice(0).reverse()
  return (
    <Layout>
      <Seo title="Home" description="welcome to Riza Hariati Portfolio Page" />
      <Grid item md={9} xs={12} sx={gridBanner}>
        <div
          style={{
            width: "100%",
            overflow: "hidden",
            border: "1px solid #62626154",
            borderRadius: "5px",
          }}
        >
          <Paper variant="outlined" sx={paperBanner}>
            <Avatar
              sx={{
                border: "transparent",
                height: { md: "150px", sm: "100px", xs: "70px" },
                width: { md: "150px", sm: "100px", xs: "70px" },
              }}
            >
              <StaticImage
                src="../images/MyPhoto.jpg"
                alt="riza hariati"
                objectFit="cover"
                objectPosition="center"
              />
            </Avatar>
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: "24px", sm: "28px", md: "35px" } }}
            >
              Hi! I'm Riza Hariati
            </Typography>
            <Typography
              variant="h4"
              color="primary"
              sx={{ lineHeight: "14px", fontSize: { xs: "14px", md: "18px" } }}
            >
              Welcome to my page
            </Typography>
            <Typography
              variant="h4"
              color="primary"
              sx={{
                marginBottom: "25px",
                fontSize: { xs: "14px", md: "18px" },
              }}
            >
              Here are some of my projects :
            </Typography>
            <Grid
              container
              spacing={2}
              sx={{
                paddingInline: { md: 2, sm: 1, xs: 0 },
                marginBottom: { md: 0, xs: "200px" },
              }}
            >
              {newProjects.map(project => {
                const { id, title, imageLink, url } = project
                const newImage = allImages.find(image => {
                  return image.gatsbyImageData.images.sources[0].srcSet.includes(
                    imageLink
                  )
                })
                const pathToImage = getImage(newImage.gatsbyImageData)
                return (
                  <Grid item md={6} xs={12} key={id}>
                    <Card sx={card} elevation={2}>
                      <a href={url}>
                        <CardActionArea sx={cardActions}>
                          <GatsbyImage
                            image={pathToImage}
                            alt={imageLink}
                            style={{
                              margin: "auto",
                            }}
                          />
                        </CardActionArea>
                      </a>
                      <CardActions
                        sx={[
                          cardActions,
                          {
                            borderTop: "1px solid #62626154",
                          },
                        ]}
                      >
                        <Typography variant="button" color="secondary">
                          {title}
                        </Typography>

                        <ButtonGroup>
                          <Button
                            variant="outlined"
                            size="small"
                            color="primary"
                          >
                            <a href={url}>visit website</a>
                          </Button>

                          <Button
                            variant="outlined"
                            size="small"
                            color="primary"
                          >
                            <Link to="/project/" state={{ myProp: id }}>
                              Read more
                            </Link>
                          </Button>
                        </ButtonGroup>
                      </CardActions>
                    </Card>
                  </Grid>
                )
              })}
            </Grid>
          </Paper>
        </div>
      </Grid>
    </Layout>
  )
}

export default Index

export const result = graphql`
  query getAllImage {
    allImageSharp {
      nodes {
        gatsbyImageData(
          placeholder: DOMINANT_COLOR
          layout: CONSTRAINED
          height: 130
          width: 200
        )
      }
    }
  }
`
