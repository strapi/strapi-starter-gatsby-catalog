import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


const Header = ({ siteName }) => {

  return (
    <header className="border-gray-200 border-b p-8 mb-12">
      <div className="flex flex-col items-center">
        <h1 className="mb-4 font-bold text-4xl">
          {siteName}
        </h1>
        <div>
          <Link className="mx-2 text-lg" to='/'>Categories</Link>
          <Link className="mx-2 text-lg" to='/products'>Search products</Link>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteName: PropTypes.string,
}

Header.defaultProps = {
  siteName: ``,
}



export default Header
