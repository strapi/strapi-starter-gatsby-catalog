import React, { useState, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useFlexSearch } from "react-use-flexsearch"

import ProductList from "~/components/product-list"
import PageHeading from "~/components/styled/page-heading"
import ProductSearch from "~/components/product-search"

import CloseIcon from "~/images/close.svg"

import { useOnClickOutside, useOnKeypress } from "~/helpers/hooks"

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
  const modal = useRef()
  useOnClickOutside(modal, () => setOpenModal(false))
  useOnKeypress(() => setOpenModal(false))

  const hasNoResults = searchQuery.length > 0 && results.length === 0

  return (
    <div
      ref={modal}
      className="bg-white relative m-auto max-h-full max-w-2xl p-4 overflow-scroll rounded-md shadow-2xl z-10"
    >
      <div className="mb-6 mt-4">
        <button
          className="absolute right-4 top-2"
          onClick={() => setOpenModal(false)}
        >
          <img className="w-6" src={CloseIcon} alt="close icon" />
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
