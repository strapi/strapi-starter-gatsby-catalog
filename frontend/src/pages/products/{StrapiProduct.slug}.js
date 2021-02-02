import React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"

const ProductPage = ({ data }) => {
  const product = data.strapiProduct
  const [products] = product.relatedProducts
  const { products: relatedProducts } = products

  return (
    <Layout>
      <div className="w-full">
        <div className="flex w-full flex flex-col md:flex-row items-center mb-24">
          <div className="w-full md:w-1/2">
            {product.image && (
              <Img className="rounded" fluid={product.image.childImageSharp.fluid} />
            )}
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-end items-center">
            <h1>{product.title}</h1>
            <div>price: </div>
            <button className="p-4 rounded border-2 mt-4">
              Shop Dealer's Online
            </button>
          </div>
        </div>
        <div className="my-6 mb-24">
          <h1 className="text-4xl font-bold text-center">
            Product Description
          </h1>
          <hr className="bg-gray-200 mt-6 mb-12 m-auto w-24 border-t-4"/>
          <ReactMarkdown className="prose md:w-4/5 m-auto" children={product.productDescription} />
        </div>
        <div className="flex flex-col my-6 mb-24">
          <h1 className="text-4xl font-bold text-center">
            Related Products
          </h1>
          <hr className="bg-gray-200 mt-6 mb-12 m-auto w-24 border-t-4"/>
          <div className="flex flex-col items-center md:flex-row md:items-start md:justify-evenly md:flex-wrap">
            {relatedProducts.map(relatedProduct => (
              <div className="w-full md:w-5/12">
                {relatedProduct.image ? (
                  <Img className="rounded" fluid={relatedProduct.image.childImageSharp.fluid} />
                ) : (
                  "No image"
                )}
                <p className="font-medium">{relatedProduct.title}</p>
              </div>
              
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProductQuery($slug: String!) {
    strapiProduct(slug: { eq: $slug }) {
      title
      productDescription
      image {
        childImageSharp {
          fluid(maxWidth: 1280, maxHeight: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      relatedProducts {
        products {
          title
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
