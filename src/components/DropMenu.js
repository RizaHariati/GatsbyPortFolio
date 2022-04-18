import React from "react"
import { Typography, Button, Collapse, Divider } from "@mui/material"
import { projects } from "../data/data"
import { CheckCircleOutline } from "@mui/icons-material"
import { Link } from "gatsby"
import { subMenuBtn, subMenuBtnContainer } from "../styles/styles"
import "../styles/styles.css"

const DropMenu = ({ open, setOpen }) => {
  return (
    <div
      role="button"
      onClick={() => setOpen(!open)}
      tabIndex={0}
      onKeyDown={() => console.log("key down")}
    >
      <Collapse in={open}>
        {projects.map(project => {
          const { id, title } = project
          return (
            <div key={id}>
              <Divider variant="fullWidth" />
              <Link to="/project/" state={{ myProp: id }}>
                <Button
                  startIcon={<CheckCircleOutline />}
                  color="primary"
                  sx={subMenuBtnContainer}
                >
                  <Typography variant="h4" color="secondary" sx={subMenuBtn}>
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
