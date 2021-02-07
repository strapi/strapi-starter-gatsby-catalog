import React, { useState } from "react"
import { graphql } from "gatsby"

import { useFlexSearch } from "react-use-flexsearch"

import Layout from "../../components/layout"
import ProductSearch from "../../components/product-search"
import ProductList from "../../components/product-list"
import SEO from "../../components/seo"

const SearchPage = ({
  data: {
    localSearchPages: { index, store },
    allStrapiProduct: { edges },
  },
}) => {
  const [searchQuery, setSearchQuery] = useState("")
  const results = useFlexSearch(searchQuery, index, store)

  const flatProducts = edges.map(({ node }) => node)
  const products = results.length > 0 ? results : flatProducts
  
  const seo = { title: "Product Search" }

  return (
    <Layout>
      <SEO seo={seo} />
      <h1 className="mb-8 inline-block border-b-2 text-2xl font-normal">
        Products
      </h1>
      <ProductSearch
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <ProductList products={products} />
    </Layout>
  )
}

export const searchPageQuery = graphql`
  query ProductSearchQuery {
    localSearchPages {
      index
      store
    }
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
