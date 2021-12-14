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
  backgroundColor: "transparent",
}

const Index = ({ data }) => {
  const allImages = data.allImageSharp.nodes

  return (
    <Layout>
      <Seo title="Home" description="welcome to Riza Hariati Portfolio Page" />
      <Grid item md={9} xs={12} sx={gridBanner}>
        <Paper variant="outlined" sx={paperBanner}>
          <Avatar
            sx={{
              border: "2px solid white",
              height: { md: "150px", sm: "100px", xs: "70px" },
              width: { md: "150px", sm: "100px", xs: "70px" },
            }}
          >
            <StaticImage
              src="../images/MyPhoto.jpg"
              alt="riza hariati"
              width={200}
              height={200}
              objectFit="cover"
              objectPosition="center"
            />
          </Avatar>
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: "26px", sm: "32px", md: "40px" } }}
          >
            Hi! I'm Riza Hariati
          </Typography>
          <Typography
            variant="h4"
            color="primary"
            sx={{ fontSize: { xs: "16px", md: "22px" } }}
          >
            Welcome to my page
          </Typography>
          <Typography
            variant="h4"
            color="primary"
            sx={{ fontSize: { xs: "16px", md: "22px" } }}
          >
            Here are some of my projects :
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{ paddingInline: { md: 2, sm: 1, xs: 0 } }}
          >
            {projects.map(project => {
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
                          height={120}
                          style={{ margin: "auto" }}
                        />
                      </CardActionArea>
                    </a>
                    <CardActions sx={cardActions}>
                      <Typography variant="button" color="secondary">
                        {title}
                      </Typography>

                      <ButtonGroup>
                        <Button variant="outlined" size="small" color="primary">
                          <a href={url}>visit website</a>
                        </Button>

                        <Button variant="outlined" size="small" color="primary">
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
      </Grid>
    </Layout>
  )
}

export default Index

export const result = graphql`
  query getAllImage {
    allImageSharp {
      nodes {
        gatsbyImageData(placeholder: DOMINANT_COLOR, layout: CONSTRAINED)
      }
    }
  }
`
