import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { useFlexSearch } from "react-use-flexsearch"

import ProductSearch from "./product-search"
import SearchResults from "./search-results"
import Footer from "./footer"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteNameQuery {
      strapiGlobal {
        siteName
      }
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
  const hasResults = results.length > 0
  const hasNoResults = searchQuery.length > 0 && results.length === 0

  return (
    <div className="bg-gray-50">
      <Header siteName={data.strapiGlobal.siteName || `Strapi`} />
      <div className="flex flex-col max-w-screen-lg m-auto min-h-screen p-10">
        <ProductSearch
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        {hasResults && (
          <div className="mt-12">
            <SearchResults results={results} />
          </div>
        )}
        {hasNoResults && (
          <p className="italic text-sm font-light mt-2">
            Your search didn't return any results
          </p>
        )}
        <main className="flex-1 mt-12">{children}</main>
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
