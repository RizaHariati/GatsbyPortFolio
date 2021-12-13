import React from "react"
import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core"
import Layout from "../components/Layout"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"
import { projects } from "../data/data"
import Seo from "../components/SEO"
const useStyles = makeStyles(theme => {
  return {
    grid: {
      height: "100%",

      [theme.breakpoints.down("sm")]: {
        height: "85%",
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
      padding: 20,
    },
    myPhoto: {
      border: "2px solid white",
      height: "150px",
      width: "150px",
      [theme.breakpoints.down("sm")]: {
        height: "100px",
        width: "100px",
      },
    },
    card: {
      maxWidth: 250,
      alignItems: "center",
      margin: "auto",
    },
    gridcard: {
      paddingInline: 70,
      [theme.breakpoints.down("sm")]: {
        paddingInline: 20,
      },
      [theme.breakpoints.down("xs")]: {
        paddingInline: 10,
      },
    },
    cardActions: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: 10,
      borderBottom: "0.5px solid gray",
    },
    buttongroup: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      columnGap: 10,
    },
    image: {
      margin: "auto",
    },
    mainTitle: {
      [theme.breakpoints.down("xs")]: {
        fontSize: "25px",
      },
    },
    title: {
      [theme.breakpoints.down("xs")]: {
        fontSize: "14px",
      },
    },
    button: {
      [theme.breakpoints.down("xs")]: {
        fontSize: "12px",
      },
    },
  }
})

const Home = ({ data }) => {
  const classes = useStyles()
  const allImages = data.allImageSharp.nodes

  return (
    <Layout>
      <Seo title="Home" description="welcome to Riza Hariati Portfolio Page" />
      <Grid item md={9} xs={12} className={classes.grid}>
        <Paper variant="outlined" className={classes.paper}>
          <Avatar className={classes.myPhoto}>
            <StaticImage
              src="../images/MyPhoto.jpg"
              alt="riza hariati"
              width={200}
              height={200}
              objectFit="cover"
              objectPosition="center"
            />
          </Avatar>
          <Typography variant="h1" className={classes.mainTitle}>
            Hi! I'm Riza Hariati
          </Typography>
          <Typography variant="h4" color="primary" className={classes.title}>
            Welcome to my page
          </Typography>
          <Typography variant="h4" color="primary" className={classes.title}>
            Here are some of my projects :
          </Typography>
          <Grid container spacing={2} className={classes.gridcard}>
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
                  <Card className={classes.card} elevation={4}>
                    <a href={url}>
                      <CardActionArea className={classes.cardActions}>
                        <GatsbyImage
                          image={pathToImage}
                          alt={imageLink}
                          height={120}
                          className={classes.image}
                        />
                      </CardActionArea>
                    </a>
                    <CardActions className={classes.cardActions}>
                      <Typography variant="button" color="secondary">
                        {title}
                      </Typography>

                      <div className={classes.buttongroup}>
                        <a href={url}>
                          <Button
                            variant="outlined"
                            size="small"
                            color="primary"
                            className={classes.button}
                          >
                            visit website
                          </Button>
                        </a>
                        <Link to="/project/" state={{ myProp: id }}>
                          <Button
                            variant="outlined"
                            size="small"
                            color="primary"
                            className={classes.button}
                          >
                            Read more
                          </Button>
                        </Link>
                      </div>
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

export default Home

export const result = graphql`
  query getAllImage {
    allImageSharp {
      nodes {
        gatsbyImageData(placeholder: DOMINANT_COLOR, layout: CONSTRAINED)
      }
    }
  }
`
