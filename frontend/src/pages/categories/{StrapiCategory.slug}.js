import React from "react"
import SEO from "../../components/seo"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import ProductList from "../../components/product-list"
import PageHeading from "../../components/styled/page-heading"

const CategoryPage = ({ data }) => {
  const products = data.strapiCategory.products
  const seo = {
    title: data.strapiCategory.name,
  }

  return (
    <Layout>
      <SEO seo={seo} />
      <div>
        <PageHeading>{data.strapiCategory.name}</PageHeading>
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
        price
        id
        image {
          childImageSharp {
            fluid(maxWidth: 1024, maxHeight: 768) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default CategoryPage
