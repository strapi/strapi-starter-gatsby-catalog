import React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"
import SharpImage from "../../components/sharp-image"
import ReactMarkdown from "react-markdown"
import ProductList from "../../components/product-list"

const ProductPage = ({ data }) => {
  const product = data.strapiProduct
  const relatedProducts =
    product.relatedProducts && product.relatedProducts.products

  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        {product.image && (
          <div className="md:col-span-2">
            <SharpImage className="rounded" image={product.image} />
          </div>
        )}
        <div className="flex flex-col justify-between">
          <h1>{product.title}</h1>
          <div className="w-full">
            {product.specifications &&
              product.specifications.map((spec, index) => (
                <div className="w-full flex justify-between items-between border-b mb-2 pb-1" key={`${spec.key}-${index}`}>
                  <span>{spec.key}</span>
                  <span>{spec.value}</span>
                </div>
              ))}
          </div>
          <button className="p-4 rounded border-2 mt-4">
            Shop Dealer's Online
          </button>
        </div>
      </div>
      <div className="my-6 mb-24">
        <h1 className="text-4xl font-bold text-center">Product Description</h1>
        <hr className="bg-gray-200 mt-6 mb-12 m-auto w-24 border-t-4" />
        <ReactMarkdown
          className="prose md:w-4/5 m-auto"
          children={product.productDescription}
        />
      </div>
      {relatedProducts && (
        <div className="flex flex-col my-6 mb-24">
          <h1 className="text-4xl font-bold text-center">Related Products</h1>
          <hr className="bg-gray-200 mt-6 mb-12 m-auto w-24 border-t-4" />
          <ProductList
            products={relatedProducts}
            gridCols="grid-cols-1 md:grid-cols-2"
          />
        </div>
      )}
    </Layout>
  )
}

export const query = graphql`
  query ProductQuery($slug: String!) {
    strapiProduct(slug: { eq: $slug }) {
      title
      productDescription
      id
      image {
        childImageSharp {
          fluid(maxWidth: 1280, maxHeight: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      specifications {
        key
        value
      }
      relatedProducts {
        products {
          title
          id
          image {
            childImageSharp {
              fluid(maxWidth: 1280, maxHeight: 720) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default ProductPage
