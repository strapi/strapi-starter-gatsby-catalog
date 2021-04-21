import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"

const Image = ({ image, className, alt }) => {
  const data = useStaticQuery(graphql`
    query {
      strapiGlobal {
        placeHolder {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, aspectRatio: 1.3)
          }
        }
      }
    }
  `)

  if (!image) {
    return (
      <GatsbyImage
        className={className}
        image={getImage(data.strapiGlobal.placeHolder)}
        alt="Placeholder Image"
      />
    )
  }

  return <GatsbyImage alt={alt} className={className} image={getImage(image)} />
}

Image.propTypes = {
  image: PropTypes.object.isRequired,
  className: PropTypes.string,
  alt: PropTypes.string.isRequired,
}

export default Image
