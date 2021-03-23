import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ seo = {} }) => {
  const query = graphql`
    query {
      strapiGlobal {
        siteName
        favicon {
          publicURL
        }
        defaultSeo {
          metaTitle
          metaDescription
          shareImage {
            publicURL
          }
        }
      }
    }
  `
  const { strapiGlobal } = useStaticQuery(query)
  const { defaultSeo, siteName, favicon } = strapiGlobal

  // Merge default and page-specific SEO values
  const fullSeo = { ...defaultSeo, ...seo }

  const getMetaTags = () => {
    const tags = []

    if (fullSeo.metaTitle) {
      tags.push(
        {
          property: "og:title",
          content: fullSeo.metaTitle,
        },
        {
          name: "twitter:title",
          content: fullSeo.metaTitle,
        }
      )
    }
    if (fullSeo.metaDescription) {
      tags.push(
        {
          name: "description",
          content: fullSeo.metaDescription,
        },
        {
          property: "og:description",
          content: fullSeo.metaDescription,
        },
        {
          name: "twitter:description",
          content: fullSeo.metaDescription,
        }
      )
    }
    if (fullSeo.shareImage) {
      const imageUrl =
        (process.env.API_URL || "http://localhost:8000") +
        fullSeo.shareImage.publicURL
      tags.push(
        {
          name: "image",
          content: imageUrl,
        },
        {
          property: "og:image",
          content: imageUrl,
        },
        {
          name: "twitter:image",
          content: imageUrl,
        }
      )
    }
    if (fullSeo.article) {
      tags.push({
        property: "og:type",
        content: "article",
      })
    }
    tags.push({ name: "twitter:card", content: "summary_large_image" })

    return tags
  }

  const metaTags = getMetaTags()

  return (
    <Helmet
      title={fullSeo.title || fullSeo.metaTitle}
      titleTemplate={`%s | ${siteName}`}
      meta={metaTags}
      link={[
        {
          rel: "icon",
          href: favicon.publicURL,
        },
      ]}
    />
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
}

SEO.defaultProps = {
  title: null,
  image: null,
}

export default SEO
