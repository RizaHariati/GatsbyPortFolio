import React from "react"

import { Divider, Grid, Paper, Typography } from "@mui/material"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import { makeStyles } from "@mui/styles"
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
  }
})

const Error = () => {
  const classes = useStyles()

  return (
    <Layout>
      <Seo title="error" />
      <Grid item md={9} xs={12} className={classes.grid}>
        <Paper className={classes.paper}>
          <Typography variant="h2" align="left" style={{ width: "100%" }}>
            PAGE NOT FOUND
          </Typography>

          <Divider variant="fullWidth" style={{ width: "100%" }} />
        </Paper>
      </Grid>
    </Layout>
  )
}

export default Error
