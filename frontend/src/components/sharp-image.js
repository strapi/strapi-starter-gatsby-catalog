import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const SharpImage = ({image, className}) => {
  const data = useStaticQuery(graphql`
    query {
      strapiGlobal {
        placeHolder {
          childImageSharp {
            fluid(maxWidth: 1024, maxHeight: 768) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  if (!image) {
    return <Img className={className} fluid={data.strapiGlobal.placeHolder.childImageSharp.fluid} />
  }

  return <Img className={className} fluid={image.childImageSharp.fluid} />
}

export default SharpImage
