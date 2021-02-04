import React from 'react'
import PropTypes from 'prop-types'

import 'normalize.css'
import GlobalStyles from '../assets/styles/globalStyles'

import Nav from './nav'
import Footer from './footer'
import Typography from '../assets/styles/typography'

const Layout = ({ children }) => (
  <>
    <Typography />
    <GlobalStyles />
    <Nav />
    {children}
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
