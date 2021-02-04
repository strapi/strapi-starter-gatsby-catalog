import React from "react"
import { Link } from "gatsby"
import SharpImage from "./sharp-image"
import PropTypes from "prop-types";

const ProductList = ({ products, gridCols }) => {
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

ProductList.propTypes = {
  products: PropTypes.array,
  gridCols: PropTypes.string
}

ProductList.defaultProps = {
  gridCols: "grid-cols-1 md:grid-cols-3"
}

export default ProductList
