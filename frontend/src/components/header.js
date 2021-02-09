import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteName }) => {
  return (
    <header className="p-8">
      <div className="flex flex-col items-center">
        <Link className="mx-2 text-lg" to="/">
          <h1 className="mb-4 font-bold text-4xl">{siteName}</h1>
        </Link>
        <div>
          <Link className="mx-2 text-lg" to="/">
            Categories
          </Link>
          <Link className="mx-2 text-lg" to="/products">
            Products
          </Link>
        </div>
      </div>
      <hr className="mt-6 m-auto w-24 border-t-4" />
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
