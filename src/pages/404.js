import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: No pude encontrarlo" />
      <h1>No Pude encontrar tu página.</h1>
      <p>
        Tu llegaste a una página que simplemente no existe o ha desaparecido.
      </p>

      <h2>PERO Todo tiene solución:</h2>
      <ol>
        <li>
          ¿Estás seguro que escribiste la URL que ves arriba ↑ ? Revisa eso.
        </li>
        <li>
          ¿Por qué no vas al <Link to="/">inicio</Link> y buscas lo que
          necesitas desde allí?
        </li>
      </ol>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
