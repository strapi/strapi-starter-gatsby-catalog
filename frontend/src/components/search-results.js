import React from "react"
import ProductList from "./product-list"
import PageHeading from "./styled/page-heading"

const SearchResults = ({ results, setSearchQuery }) => {
  return (
    <div className="absolute bg-white p-8 left-4 right-4 m-auto max-h-screen overflow-scroll rounded-md shadow-2xl z-10">
      <div className="flex justify-between">
        <PageHeading>Search Results</PageHeading>
        <button onClick={() => setSearchQuery("")}>close</button>
      </div>
      <ProductList products={results} />
    </div>
  )
}

export default SearchResults
