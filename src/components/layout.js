import React from "react"
import { Link } from "gatsby"
import Navbar from './navbar/navbar';
import Footer from "./footer/footer";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <h1 className="main-heading">
        {title}
      </h1>
    )
  }

  return (
    <div>
      <Navbar/>
    {/* <div className="global-wrapper" data-is-root-path={isRootPath}> */}
      {/* <header className="global-header">{header}</header> */}
      <main>{children}</main>
    {/* </div> */}
      <Footer />
    </div>
  )
}

export default Layout
