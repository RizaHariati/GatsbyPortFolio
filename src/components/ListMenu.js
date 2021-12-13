import { makeStyles, Typography, Button, Divider } from "@material-ui/core"
import { Apartment, Home, PersonRounded } from "@material-ui/icons"
import { Link } from "gatsby"
import React, { useState } from "react"
import DropMenu from "./DropMenu"

const useStyles = makeStyles(theme => {
  return {
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

const ListMenu = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  return (
    <div style={{ width: "100%" }}>
      <Link to="/">
        <Button startIcon={<Home />} color="primary" className={classes.button}>
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
        onMouseEnter={() => setOpen(true)}
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
