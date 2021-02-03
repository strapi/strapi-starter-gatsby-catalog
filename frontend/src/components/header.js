import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


const Header = ({ siteTitle }) => {

  return (
    <header className="h-24 border-b p-8 mb-12">
      <div className="flex justify-center">
        <h1>
          <Link>{siteTitle}</Link>
        </h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}



export default Header
