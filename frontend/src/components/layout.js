import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import github from "../images/github.svg"
import twitter from "../images/twitter.svg"
import facebook from "../images/facebook.svg"

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
    <div className="bg-gray-50">
      <Header siteName={data.strapiGlobal.siteName || `Strapi`} />
      <div className="flex flex-col w-4/5 m-auto min-h-screen">
        <main className="flex-1">{children}</main>
        <footer className="flex justify-between pb-4">
          <p className="text-sm font-semibold text-gray-600">
            Strapi Starter Gatsby Catalog
          </p>
          <div className="flex gap-3 ml-4">
            <a href="https://twitter.com/strapijs" className="max-w-xs ml-4">
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="https://facebook.com/strapijs" className="ml-3">
              <img src={facebook} alt="Facebook" />
            </a>
            <a
              href="https://github.com/strapi/strapi-starter-gatsby-catalog"
              className="ml-3"
            >
              <img src={github} alt="GitHub" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
