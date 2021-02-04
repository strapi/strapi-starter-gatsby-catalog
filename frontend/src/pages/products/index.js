import React, { useState } from "react"
import { graphql } from "gatsby"

import { useFlexSearch } from "react-use-flexsearch"

import Layout from "../../components/layout"
import ProductSearch from "../../components/product-search"
import ProductList from "../../components/product-list"

const SearchPage = ({
  data: {
    localSearchPages: { index, store },
    allStrapiProduct: { edges },
  },
}) => {
  const [searchQuery, setSearchQuery] = useState("")
  const results = useFlexSearch(searchQuery, index, store)
  
  const flatProducts = edges.map(({node}) => node)
  const products = results.length > 0 ? results : flatProducts

  return (
    <Layout>
      <h1 className="mb-8 text-2xl font-normal">Products</h1>
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
          slug
          id
          productDescription
        }
      }
    }
  }
`

export default SearchPage
