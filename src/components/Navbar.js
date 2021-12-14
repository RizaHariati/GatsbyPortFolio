import { Grid, Typography, IconButton, Collapse, Paper } from "@mui/material"

import { Apps } from "@mui/icons-material"
import React, { useState } from "react"
import ListMenu from "./ListMenu"
import Social from "./Social"
import { paperSocial, paper } from "../styles/styles"
import "../styles/styles.css"

const Navbar = () => {
  const [openList, setOpenList] = useState(false)
  return (
    <>
      <Grid
        item
        md={3}
        xs={12}
        sx={{
          height: { md: "100%", sm: "15%", xs: "15%" },
        }}
      >
        <Paper variant="outlined" sx={paper}>
          <Typography variant="h2" color="secondary">
            <span style={{ color: "black" }}>Azri</span>Coding
          </Typography>
          <div className="showOnLarge">
            <ListMenu />
          </div>
          <div className="showOnLarge">
            <Social />
          </div>
          <IconButton
            variant="square"
            sx={{
              display: { md: "none", xs: "block" },
              width: { xs: "40px", sm: "50px" },
              height: { xs: "40px", sm: "50px" },
              padding: "2px",
            }}
            onClick={() => setOpenList(!openList)}
          >
            <Apps sx={{ fontSize: "30px", margin: "auto" }} />
          </IconButton>
        </Paper>
      </Grid>
      <Grid
        item
        md={3}
        xs={12}
        sx={{
          height: "fit-content",
          display: { md: "none", xs: "flex" },
        }}
      >
        <Collapse in={openList} sx={{ width: "100%" }}>
          <Paper variant="outlined" sx={paperSocial}>
            <ListMenu />
            <Social />
          </Paper>
        </Collapse>
      </Grid>
    </>
  )
}

export default Navbar
