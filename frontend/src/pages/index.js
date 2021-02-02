import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = ({ data: { allStrapiCategory } }) => {
  const categories = allStrapiCategory.edges

  return (
    <Layout>
      <SEO title="Home" />
      <div className="flex flex-wrap h-/14 md:self-center justify-center">
        {categories.map(({ node }) => (
          <Link to={`categories/${node.slug}`} className="p-4 m-2 h-60 w-60 rounded shadow" key={node.name}>
            {node.name}
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query CategoriesQuery {
    allStrapiCategory {
      edges {
        node {
          name
          slug
        }
      }
    }
  }
`

export default IndexPage
