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
        {
          name: `google-site-verification`,
          content: "ToQHHEWK48t95I0a2-VCdlbdgY7joocmPhmLPMS2KUw",
        },
      ]}
    ></Helmet>
  )
}

export default Seo
