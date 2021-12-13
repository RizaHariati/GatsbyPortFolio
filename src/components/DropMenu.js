import React from "react"
import {
  makeStyles,
  Typography,
  Button,
  Collapse,
  Divider,
} from "@material-ui/core"
import { projects } from "../data/data"
import { DoubleArrow } from "@material-ui/icons"
import { Link } from "gatsby"

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

const DropMenu = ({ open, setOpen }) => {
  const classes = useStyles()
  return (
    <div role="textbox" onMouseLeave={() => setOpen(false)} tabIndex={0}>
      <Collapse in={open} className={classes.collapse}>
        {projects.map(project => {
          const { id, title } = project
          return (
            <div key={id}>
              <Divider variant="fullWidth" />
              <Link to="/project/" state={{ myProp: id }}>
                <Button
                  startIcon={<DoubleArrow />}
                  color="primary"
                  className={classes.button}
                >
                  <Typography variant="h4" color="secondary">
                    {title}
                  </Typography>
                </Button>
              </Link>
            </div>
          )
        })}
      </Collapse>
    </div>
  )
}

export default DropMenu
