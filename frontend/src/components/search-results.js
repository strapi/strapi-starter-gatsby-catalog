import React from "react"
import ProductList from "./product-list"

const SearchResults = ({ results }) => {
  return (
    <div>
      <h1 className="mb-10 inline-block border-b-2 text-2xl font-medium">
        Search Results
      </h1>
      <ProductList products={results} />
    </div>
  )
}

export default SearchResults
