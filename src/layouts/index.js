import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Menu, Container } from 'semantic-ui-react'


import './index.css'

const Header = () => (
  <div>
    <Menu secondary fluid>
      <Container>
        <Menu.Item header>
          <Link to="/">
            Brooke Snellings
          </Link>
        </Menu.Item>

        <Menu.Item
          name='Artworks'
        >
          <Link to="/artworks">
            Artworks
          </Link>
        </Menu.Item>

        <Menu.Item
          name='Store'
        >
          <Link to="/store">
            Store
          </Link>
        </Menu.Item>

        <Menu.Item
          name='About'
        >
          <Link to="/about">
            About
          </Link>
        </Menu.Item>

        <Menu.Item
          name='Contact'
        >
          <Link to="/contact">
          Contact
          </Link>
        </Menu.Item>
      </Container>
    </Menu>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Brookefolio"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 70,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
