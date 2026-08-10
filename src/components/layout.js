/*
 * SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import Navbar from './navbar/navbar'
import Footer from './footer/footer'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar/>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
