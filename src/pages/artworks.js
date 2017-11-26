import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Button, Card, Image, Container } from 'semantic-ui-react'
import Img from 'gatsby-image'

export default function Artworks({data}) { 
  //const {markdownRemark: artwork} = data;
  // same as: const artwork = data.markdownRemark;
  console.log(data);
  return (
    <div>
      <h1>Artworks</h1>
      <Card.Group>
      {data.allMarkdownRemark.edges.map(({ node }) =>
      <Card key={node.frontmatter.path} >
        <div dangerouslySetInnerHTML={{ __html: node.html }} />
        <Container fluid>
          <Card.Header>{node.frontmatter.title}</Card.Header>
          <Card.Meta>{node.frontmatter.year}</Card.Meta>
        </Container>
      </Card>
      )}
      </Card.Group>
    </div>
  )
}
  export const artworkQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          html
          id
          frontmatter {
            path
            title
            year
          }
        }
      }
    }
  }
`
