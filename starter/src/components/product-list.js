import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Card from "~/components/styled/card"
import Image from "~/components/image"

import { formatPrice } from "~/helpers/currency-formatter"

const ProductList = ({ products, gridCols }) => {
  return (
    <div className={`grid ${gridCols} gap-6`}>
      {products.map(product => {
        return (
          <Card key={product.id}>
            <Link to={`/products/${product.slug}`} key={product.id}>
              <Image
                alt="Product Image"
                className="rounded-t-md border-gray-200	 border-b"
                image={product.image}
              />
              <div className="px-4 py-6">
                <p>{product.title}</p>
                <p className="text-xs self-end">
                  {product.price && formatPrice(product.price)}
                </p>
              </div>
            </Link>
          </Card>
        )
      })}
    </div>
  )
}

ProductList.propTypes = {
  products: PropTypes.array,
  gridCols: PropTypes.string,
}

ProductList.defaultProps = {
  gridCols: "grid-cols-1 md:grid-cols-3",
}

export default ProductList
