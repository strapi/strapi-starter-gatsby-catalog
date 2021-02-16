import React from "react"
import { graphql } from "gatsby"

import Layout from "~/components/layout"
import SEO from "~/components/seo"
import CategoryList from "~/components/category-list"
import PageHeading from "~/components/styled/page-heading"

const IndexPage = ({ data: { allStrapiCategory } }) => {
  const categories = allStrapiCategory.edges
  const seo = { title: "Categories" }
  return (
    <Layout>
      <SEO seo={seo} />
      <PageHeading>Categories</PageHeading>
      <CategoryList categories={categories} />
    </Layout>
  )
}

export const query = graphql`
  query CategoriesQuery {
    allStrapiCategory {
      edges {
        node {
          name
          id
          slug
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
  }
`

export default IndexPage
