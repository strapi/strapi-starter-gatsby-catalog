import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = ({ data: { allStrapiCategory } }) => {
  const categories = allStrapiCategory.edges
  
  return (
    <Layout>
      <SEO title="Home" />
      {categories.map(({node}) => (
        <div key={node.name}>{node.name}</div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query CategoriesQuery {
    allStrapiCategory {
      edges {
        node {
          name
        }
      }
    }
  }
`

export default IndexPage
