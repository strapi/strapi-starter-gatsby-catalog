import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"

const SharpImage = ({ image, className }) => {
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
    return (
      <Img
        className={className}
        fluid={data.strapiGlobal.placeHolder.childImageSharp.fluid}
      />
    )
  }

  return (
    <Img
      className={className}
      fluid={image.childImageSharp.fluid}
      imgStyle={{ objectFit: "contain" }}
    />
  )
}

SharpImage.propTypes = {
  image: PropTypes.object,
  className: PropTypes.string,
}

export default SharpImage
