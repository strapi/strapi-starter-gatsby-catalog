import React from "react"
import PropTypes from "prop-types";

const ProductSearch = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="w-full flex justify-center mb-14">
      <input
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        type="text"
        placeholder="Search"
        className="border-2 rounded-md w-full md:w-1/2 p-2 focus:outline-none"
      />
    </div>
  )
}

ProductSearch.propTypes = {
  searchQuery: PropTypes.string,
  setSearchQuery: PropTypes.func,
};

export default ProductSearch
