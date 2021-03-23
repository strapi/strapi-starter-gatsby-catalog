import React from "react"

import github from "~/images/github.svg"
import twitter from "~/images/twitter.svg"
import facebook from "~/images/facebook.svg"

const Footer = () => {
  return (
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
  )
}

export default Footer
