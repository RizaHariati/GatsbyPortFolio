import ReactDOM from "react-dom"
import React from "react"

import { ThemeProvider } from "@material-ui/core"
import { theme } from "./src/styles/theme"
const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}

function replaceHydrateFunction() {
  return (element, container, callback) => {
    ReactDOM.render(element, container, callback)
  }
}
export { wrapRootElement, replaceHydrateFunction }
