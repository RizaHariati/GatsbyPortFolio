import { Typography, Button, Divider } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { Apartment, Home, PersonRounded } from "@mui/icons-material"
import { Link } from "gatsby"
import React, { useState } from "react"
import DropMenu from "./DropMenu"

const useStyles = makeStyles(theme => {
  return {
    button: {
      width: "100%",
      height: { xs: 30, md: 40 },
    },
    buttonMenu: {
      display: "none",

      [theme.breakpoints.down("sm")]: {
        display: "block",
      },
    },
  }
})

const ListMenu = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  return (
    <div style={{ width: "100%" }}>
      <Link to="/">
        <Button
          startIcon={<Home />}
          color="primary"
          className={classes.button}
          variant="text"
          style={{ borderBottom: "1px solid #62626154", borderRadius: 0 }}
        >
          <Typography variant="h4" color="primary">
            Home
          </Typography>
        </Button>
      </Link>
      <Divider variant="fullWidth" />

      <Button
        startIcon={<Apartment />}
        color="primary"
        className={classes.button}
        onClick={() => setOpen(!open)}
        style={{ borderBottom: "1px solid #62626154", borderRadius: 0 }}
      >
        <Typography variant="h4" color="primary">
          Project
        </Typography>
      </Button>

      <DropMenu open={open} setOpen={setOpen} />
      <Divider variant="fullWidth" />
      <Link to="/about/">
        <Button
          startIcon={<PersonRounded />}
          color="primary"
          className={classes.button}
          style={{ borderBottom: "1px solid #62626154", borderRadius: 0 }}
        >
          <Typography variant="h4" color="primary">
            About
          </Typography>
        </Button>
      </Link>
      <Divider variant="fullWidth" />
    </div>
  )
}

export default ListMenu
