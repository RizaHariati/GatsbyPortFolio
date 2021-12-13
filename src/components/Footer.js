import { Drawer, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import React from "react"

const useStyles = makeStyles(theme => {
  return {
    drawer: {},
  }
})

const Footer = () => {
  const classes = useStyles()
  return (
    <Drawer
      anchor="bottom"
      open={true}
      variant="persistent"
      className={classes.drawer}
    >
      <a href="http://www.freepik.com">
        <Typography variant="body2" color="primary" align="right">
          Designed by pikisuperstar / Freepik
        </Typography>
      </a>
    </Drawer>
  )
}

export default Footer
