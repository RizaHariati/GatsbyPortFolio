import React from "react"
import Helmet from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        description
        owner
        title
      }
    }
  }
`
const Seo = ({ title, description }) => {
  const result = useStaticQuery(query)
  const metaData = result.site.siteMetadata
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${title} | AzriCoding`}
      meta={[
        { name: `description`, content: description || metaData.description },
      ]}
    ></Helmet>
  )
}

export default Seo
