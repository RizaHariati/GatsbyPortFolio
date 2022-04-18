import { Drawer, Typography } from "@mui/material"

import React from "react"

const Footer = () => {
  return (
    <Drawer anchor="bottom" open={true} variant="persistent">
      <a
        href="http://www.freepik.com"
        style={{
          maxWidth: "1280px",
          width: "95%",
        }}
      >
        <Typography
          variant="body2"
          // color="primary"

          align="right"
        >
          <a href="https://www.freepik.com/pikisuperstar">
            Back ground designed by pikisuperstar / Freepik
          </a>
          <a href="https://www.vecteezy.com/free-vector/phone">
            Phone Vectors by Vecteezy
          </a>
        </Typography>
      </a>
    </Drawer>
  )
}

export default Footer
