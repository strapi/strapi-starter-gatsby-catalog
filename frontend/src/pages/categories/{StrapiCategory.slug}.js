import React from "react"
import Layout from "../../components/layout"
import ProductList from "../../components/product-list"
import SEO from "../../components/seo"
import { graphql } from "gatsby"

const CategoryPage = ({ data }) => {
  const products = data.strapiCategory.products
  const seo = {
    title: data.strapiCategory.name,
  }

  return (
    <Layout>
      <SEO seo={seo} />
      <div>
        <h1 className="mb-8 inline-block border-b-2 text-2xl font-normal">
          {data.strapiCategory.name}
        </h1>
        <ProductList products={products} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query CategoryQuery($slug: String!) {
    strapiCategory(slug: { eq: $slug }) {
      name
      products {
        title
        slug
        id
        image {
          childImageSharp {
            fluid(maxWidth: 1024, maxHeight: 768) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default CategoryPage
