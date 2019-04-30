import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { XMasonry, XBlock } from "react-xmasonry/dist/index.js"; 

const IndexPage = (props) => {
  
  const postList = props.data.allMarkdownRemark;
  console.log(postList);

  return (
    <Layout>
      <XMasonry maxColumns='4' targetBlockWidth='400'>
        {postList.edges.map(({ node }, i) => (
          <XBlock key={i} >
            <div className="card rdwn-blog-post">
              <span className="date">{node.frontmatter.date}</span>
              <Link to={node.fields.slug} className="link" >
                {node.frontmatter.tag === 'design' &&
                  <h1 className="title design">{node.frontmatter.title}</h1>
                }
                {node.frontmatter.tag === 'thought' &&
                  <h1 className="title thought">{node.frontmatter.title}</h1>
                }
                {node.frontmatter.tag === 'junk' &&
                  <h1 className="title junk">{node.frontmatter.title}</h1>
                }
              </Link>                      
              <p>{node.excerpt}</p>
            </div>
          </XBlock>
        ))}
      </XMasonry>
    </Layout>
  )
}

export default IndexPage;

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields{
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
            tag
          }
        }
      }
    }
  }
`