import React from "react"
import { Link } from "gatsby"
import SharpImage from "./sharp-image"

const CategoryList = ({ categories }) => (
  <div className="grid grid-cols-3 gap-6">
    {categories.map(({ node }) => {
      return (
        <div className="mb-14">
          <Link to={`categories/${node.slug}`} className="" key={node.name}>
            <SharpImage className="rounded" image={node.image} />
            <p className="uppercase mt-2 text-lg font-extralight">{node.name}</p>
          </Link>
        </div>
      )
    })}
  </div>
)

export default CategoryList
