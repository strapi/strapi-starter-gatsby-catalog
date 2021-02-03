import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const SharpImage = ({image, className}) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, maxHeight: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!image) {
    return <Img className="rounded" fluid={data.placeholderImage.childImageSharp.fluid} />
  }

  return <Img className="rounded" fluid={image.childImageSharp.fluid} />
}

export default SharpImage
