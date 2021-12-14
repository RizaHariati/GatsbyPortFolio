import { Drawer, Typography } from "@mui/material"

import React from "react"

const Footer = () => {
  return (
    <Drawer anchor="bottom" open={true} variant="persistent">
      <a
        href="http://www.freepik.com"
        style={{ maxWidth: "1280px", width: "95%" }}
      >
        <Typography variant="body2" color="primary" align="right">
          Designed by pikisuperstar / Freepik
        </Typography>
      </a>
    </Drawer>
  )
}

export default Footer
