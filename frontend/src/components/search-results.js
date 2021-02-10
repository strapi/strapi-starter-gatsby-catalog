import React from "react"
import ProductList from "./product-list"
import PageHeading from "./styled/page-heading"

const SearchResults = ({ results }) => {
  return (
    <div className="border-b-2">
      <PageHeading>Search Results</PageHeading>
      <ProductList products={results} />
    </div>
  )
}

export default SearchResults
