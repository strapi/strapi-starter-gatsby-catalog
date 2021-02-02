import React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"

const CategoryPage = ({ data }) => {
  const category = data.strapiCategory

  return (
    <Layout>
      <div>{category.name}</div>
      <div>{category.products.map(product => product.title)}</div>
    </Layout>
  )
}

export const query = graphql`
  query CategoryQuery($slug: String!) {
    strapiCategory(slug: { eq: $slug }) {
      name
      products {
        title
      }
    }
  }
`

export default CategoryPage
