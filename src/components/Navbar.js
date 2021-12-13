import {
  Grid,
  makeStyles,
  Paper,
  Typography,
  IconButton,
  Collapse,
} from "@material-ui/core"
import { Apps } from "@material-ui/icons"
import React, { useState } from "react"
import ListMenu from "./ListMenu"
import Social from "./Social"

const useStyles = makeStyles(theme => {
  return {
    grid: {
      height: "100%",
      [theme.breakpoints.down("sm")]: {
        height: "15%",
      },
    },
    dropMenu: {
      display: "none",
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        height: "fit-content",
      },
    },
    paper: {
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 20,
      paddingInline: 0,
      [theme.breakpoints.down("sm")]: {
        flexDirection: "row",
        paddingInline: 10,
      },
      [theme.breakpoints.down("xs")]: {
        flexDirection: "row",
        paddingInline: 5,
      },
    },
    mainlinks: {
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    button: {
      width: "100%",
      height: 50,
    },

    buttonMenu: {
      display: "none",

      [theme.breakpoints.down("sm")]: {
        display: "block",
      },
    },
  }
})

const Navbar = () => {
  const classes = useStyles()
  const [openList, setOpenList] = useState(false)
  return (
    <>
      <Grid item md={3} xs={12} className={classes.grid}>
        <Paper variant="outlined" className={classes.paper}>
          <Typography variant="h2" color="secondary">
            <span style={{ color: "black" }}>Azri</span>Coding
          </Typography>
          <div className={classes.mainlinks}>
            <ListMenu />
          </div>
          <Social />
          <IconButton
            variant="square"
            className={classes.buttonMenu}
            onClick={() => setOpenList(!openList)}
          >
            <Apps style={{ fontSize: 30 }} />
          </IconButton>
        </Paper>
      </Grid>
      <Grid item md={3} xs={12} className={classes.dropMenu}>
        <Collapse in={openList} style={{ width: "100%" }}>
          <Paper variant="outlined" className={classes.paper}>
            <ListMenu />
          </Paper>
        </Collapse>
      </Grid>
    </>
  )
}

export default Navbar
