import React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"


const ProductPage = ({ data }) => {
  const product = data.strapiProduct

  return (
    <Layout>
      <div>{product.title}</div>
    </Layout>
  )
}

export const query = graphql`
  query ProductQuery($slug: String!) {
    strapiProduct(slug: { eq: $slug }) {
      title
    }
  }
`

export default ProductPage