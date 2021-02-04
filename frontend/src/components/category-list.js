import React from "react"
import { Link } from "gatsby"
import SharpImage from "./sharp-image"

const CategoryList = ({ categories }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {categories.map(({ node }) => {
      return (
        <div className="mb-14 rounded-md" key={node.id}>
          <Link to={`/categories/${node.slug}`}>
            <SharpImage className="rounded-md" image={node.image} />
            <p className="lowercase pt-2 pb-4 text-2xl font-light">{node.name}</p>
          </Link>
        </div>
      )
    })}
  </div>
)

export default CategoryList
