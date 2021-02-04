import React from "react"

const ProductSearch = ({ searchQuery, setSearchQuery }) => (
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

export default ProductSearch
