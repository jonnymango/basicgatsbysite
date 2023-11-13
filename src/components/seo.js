/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, title, children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {children}
      <script type="application/ld+json">
      {`
        {
            "@context": "http://schema.org",
            "@type": "ProfessionalService",
            "name": "Your Agency Name",
            "description": "Expert web development services tailored for the fish industry.",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Sea Street",
                "addressLocality": "Ocean City",
                "addressRegion": "OC",
                "postalCode": "12345",
                "addressCountry": "USA"
            },
            "telephone": "+1234567890",
            "url": "http://www.youragencywebsite.com",
            "logo": "http://www.youragencywebsite.com/images/logo.png",
            "image": "http://www.youragencywebsite.com/images/hero-bg.jpg",
            "sameAs": [
                "http://www.facebook.com/youragency",
                "http://www.twitter.com/youragency",
                "http://www.linkedin.com/company/youragency"
            ]
        `}
        </script>
    </>
  )
}

export default Seo
