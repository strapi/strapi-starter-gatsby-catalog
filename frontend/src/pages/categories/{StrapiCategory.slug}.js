import React from "react"
import Layout from "../../components/layout"
import ProductList from "../../components/product-list"
import { graphql } from "gatsby"

const CategoryPage = ({ data }) => {
  const products = data.strapiCategory.products

  return (
    <Layout>
      <div>
        <h1 className="mb-8 text-2xl font-normal">{data.strapiCategory.name}</h1>
        <ProductList products={products} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query CategoryQuery($slug: String!) {
    strapiCategory(slug: { eq: $slug }) {
      name
      products {
        title
        slug
        id
        image {
          childImageSharp {
            fluid(maxWidth: 1280, maxHeight: 720) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default CategoryPage
