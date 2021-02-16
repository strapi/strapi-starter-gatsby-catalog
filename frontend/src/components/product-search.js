import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"

import SearchIcon from "~/images/search-icon.svg"

const ProductSearch = ({ searchQuery, setSearchQuery, openModal }) => {
  const inputEl = useRef(null)

  useEffect(() => {
    if (openModal) {
      inputEl.current.focus()
    }
  }, [openModal])

  return (
    <div className="w-full flex justify-center">
      <img src={SearchIcon} className="w-5 border-b-2" alt="Search Icon" />
      <input
        ref={inputEl}
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        type="text"
        placeholder="Search"
        className="border-b-2 w-full p-2 focus:outline-none bg-transparent"
      />
    </div>
  )
}

ProductSearch.propTypes = {
  searchQuery: PropTypes.string,
  setSearchQuery: PropTypes.func,
}

export default ProductSearch
