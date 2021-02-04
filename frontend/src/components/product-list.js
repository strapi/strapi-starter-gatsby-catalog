import React from "react"
import { Link } from "gatsby"
import SharpImage from "./sharp-image"

const ProductList = ({ products, gridCols = "grid-cols-1 md:grid-cols-3" }) => {
  return (
    <div className={`grid ${gridCols} gap-6`}>
      {products.map(product => (
        <div key={product.id} className="mb-14">
          <Link to={`/products/${product.slug}`} key={product.id}>
            <SharpImage className="rounded-md" image={product.image} />
            <p className="pt-2 pb-4 text-2xl font-light">{product.title}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ProductList
