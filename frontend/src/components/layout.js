import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { useFlexSearch } from "react-use-flexsearch"

import ProductSearch from "./product-search"
import ProductList from "./product-list"
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

  return (
    <div className="bg-gray-50">
      <Header siteName={data.strapiGlobal.siteName || `Strapi`} />
      <div className="flex flex-col w-4/5 m-auto min-h-screen">
        <ProductSearch
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <main className="flex-1">
          {results.length > 0 ? (
            <div>
              <h1 className="mb-10 inline-block border-b-2 text-2xl font-medium">
                Search Results
              </h1>
              <ProductList products={results} />
            </div>
          ) : (
            children
          )}
        </main>
        <Footer /> 
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
