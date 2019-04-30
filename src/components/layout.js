import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './../css/main.css'

const Layout = ({ children }) => (

  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}

    
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Busola Sanusi - Loosely held random thoughts' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div className="rdwn-container-grid">
          <Header 
            siteTitle={data.site.siteMetadata.title} />
            {children}            
        </div>

      </>
    )}
  />
)



export default Layout
