import React from "react"
import { Divider, Grid, Paper, Typography } from "@mui/material"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import {
  gridBanner,
  paperBanner,
  titleFont,
  fullDivider,
} from "../styles/styles"

const Error = () => {
  return (
    <Layout>
      <Seo title="error" />
      <Grid item md={9} xs={12} sx={gridBanner}>
        <Paper sx={paperBanner}>
          <Typography variant="h2" sx={titleFont}>
            PAGE NOT FOUND
          </Typography>
          <Divider variant="fullWidth" sx={fullDivider} />
          <Typography
            variant="h1"
            color="secondary"
            sx={{
              width: "100%",
              margin: "auto",
              textAlign: "center",
              fontSize: "100px",
            }}
          >
            404
          </Typography>
        </Paper>
      </Grid>
    </Layout>
  )
}

export default Error
