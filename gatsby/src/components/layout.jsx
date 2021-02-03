import React from 'react'
import PropTypes from 'prop-types'

import 'normalize.css'
import GlobalStyles from '../assets/styles/globalStyles'

import Nav from './nav'
import Footer from './footer'

const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    <Nav />
    {children}
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
