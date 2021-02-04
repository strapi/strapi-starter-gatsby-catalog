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
    <div className="h-screen">
      <Header siteName={data.strapiGlobal.siteName || `Strapi`} />
      <div className="overflow-scroll h-screen">
        <main className="w-4/5 m-auto">{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
