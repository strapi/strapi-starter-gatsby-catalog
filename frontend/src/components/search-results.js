import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useFlexSearch } from "react-use-flexsearch"

import ProductList from "./product-list"
import PageHeading from "./styled/page-heading"
import ProductSearch from "./product-search"

import CloseIcon from "../images/close.svg"

const SearchResults = ({ setOpenModal, openModal }) => {
  const data = useStaticQuery(graphql`
    query LocalSearchQuery {
      localSearchPages {
        index
        store
      }
    }
  `)

  const {
    localSearchPages: { index, store },
  } = data
  const [searchQuery, setSearchQuery] = useState("")
  const results = useFlexSearch(searchQuery, index, store)

  const hasNoResults = searchQuery.length > 0 && results.length === 0


  return (
    <div className="bg-white relative m-auto max-h-full max-w-xl p-4 overflow-scroll rounded-md shadow-2xl z-10">
      <div className="mb-6 mt-4">
        <button
          className="absolute right-4 top-2"
          onClick={() => setOpenModal(false)}
        >
          <img className="w-6" src={CloseIcon} alt="close icon"/>
        </button>
        <ProductSearch
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          openModal={openModal}
        />
      </div>
      {results.length > 0 && (
        <div>
          <PageHeading>Search Results</PageHeading>
          <ProductList products={results} />
        </div>
      )}
      {hasNoResults && (
        <p className="italic text-sm font-light mt-2">
          Your search didn't return any results
        </p>
      )}
    </div>
  )
}

export default SearchResults
