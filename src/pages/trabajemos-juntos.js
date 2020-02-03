import React from "react"
import { graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contactForm.js";
import WorkTogetherCopy from "../components/workTogetherCopy.mdx"

const WorkTogetherPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Trabajemos juntos" />
      <Bio />
      <WorkTogetherCopy />
      <ContactForm />
    </Layout>
  )
}

export default WorkTogetherPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
