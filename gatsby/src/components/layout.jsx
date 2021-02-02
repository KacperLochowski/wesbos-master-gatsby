import React from 'react'
import PropTypes from 'prop-types'

import Nav from './nav'
import Footer from './footer'

const Layout = ({ children }) => (
  <div>
    <Nav />
    {children}
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
