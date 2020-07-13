/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          location,
          labelVisitWebsite,
          labelLoginOrRegister
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} siteLocation={data.site.siteMetadata.location} labels={{
        labelVisitWebsite: data.site.siteMetadata.labelVisitWebsite, 
        labelLoginOrRegister: data.site.siteMetadata.labelLoginOrRegister
      }} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: '80vw',
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
