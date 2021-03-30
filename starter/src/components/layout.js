import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import SearchResults from "~/components/search-results"
import Footer from "~/components/footer"

import Header from "~/components/header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteNameQuery {
      strapiGlobal {
        siteName
      }
    }
  `)

  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="bg-gray-50 relative">
      <Header
        setOpenModal={setOpenModal}
        siteName={data.strapiGlobal.siteName || `Strapi`}
      />
      <div className="flex flex-col max-w-screen-lg m-auto min-h-screen p-6 md:p-10">
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
      {openModal && (
        <div className="h-screen max-w-screen-lg m-auto fixed bottom-0 top-0 right-0 left-0 px-6 pb-10 pt-20 md:p-10 md:pt-40">
          <SearchResults setOpenModal={setOpenModal} openModal={openModal} />
        </div>
      )}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
