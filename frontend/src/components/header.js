import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


const Header = ({ siteTitle }) => {

  return (
    <header className="border-gray-200 border-b-2 p-8 mb-12">
      <div className="flex flex-col items-center">
        <h1 className="mb-4 font-bold text-4xl">
          {siteTitle}
        </h1>
        <div>
          <Link className="mx-2 text-black-50" to='/'>Categories</Link>
          <Link className="mx-2" to='/products'>Search</Link>
        </div>
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
