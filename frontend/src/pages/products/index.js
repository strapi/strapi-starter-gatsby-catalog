import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"

import ProductList from "../../components/product-list"
import SEO from "../../components/seo"

const SearchPage = ({
  data: {
    allStrapiProduct: { edges },
  },
}) => {
  const flatProducts = edges.map(({ node }) => node)

  const seo = { title: "Products" }

  return (
    <Layout>
      <SEO seo={seo} />
      <h1 className="mb-10 inline-block border-b-2 text-2xl font-medium">
        Products
      </h1>
      <ProductList products={flatProducts} />
    </Layout>
  )
}

export const searchPageQuery = graphql`
  query ProductSearchQuery {
    allStrapiProduct {
      edges {
        node {
          specifications {
            key
            value
          }
          title
          price
          slug
          id
          productDescription
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
  }
`

export default SearchPage
