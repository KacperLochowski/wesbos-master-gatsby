import React from 'react'

import 'normalize.css'
import GlobalStyles from '../assets/styles/globalStyles'

import Nav from './nav'
import Footer from './footer'
import Typography from '../assets/styles/typography'

const Layout: React.FC = ({ children }) => (
  <>
    <Typography />
    <GlobalStyles />
    <Nav />
    {children}
    <Footer />
  </>
)

export default Layout
