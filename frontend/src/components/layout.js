import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteNameQuery {
      strapiGlobal {
        siteName
      }
    }
  `)

  return (
    <div className="flex flex-col bg-gray-50 min-h-screen">
      <Header siteName={data.strapiGlobal.siteName || `Strapi`} />
      <div className="flex-1">
        <main className="w-4/5 m-auto">{children}</main>
      </div>
      <footer>
        Pickle
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
