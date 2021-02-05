import React from "react"
import { Link } from "gatsby"
import SharpImage from "./sharp-image"
import PropTypes from "prop-types";

const CategoryList = ({ categories }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {categories.map(({ node }) => {
      return (
        <div className="mb-14 shadow-lg rounded-md" key={node.id}>
          <Link to={`/categories/${node.slug}`}>
            <SharpImage className="rounded-t-md" image={node.image} />
            <p className="lowercase px-4 py-6">{node.name}</p>
          </Link>
        </div>
      )
    })}
  </div>
)

CategoryList.propTypes = {
  categories: PropTypes.array,
}

export default CategoryList
