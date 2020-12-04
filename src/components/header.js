import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Logo from "../images/logo.inline.svg"
import { useLocation } from "@reach/router"
function Header({ siteTitle }) {
  const location = useLocation()
  const path = location.pathname ? location.pathname : ""
  return (
    <>
      <nav>
        <Link to="/" className="title-link ">
          <Logo className="logo" />
          <span>{siteTitle}</span>
        </Link>
        <div className="header">
          <Link
            to="/works"
            className={`nav-link ${path === "/works" ? "active" : ""}`}
          >
            Work
          </Link>
          <Link
            to="/services"
            className={`nav-link ${path === "/services" ? "active" : ""}`}
          >
            Services
          </Link>
          <Link
            to="/about"
            className={`nav-link ${path === "/about" ? "active" : ""}`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${path === "/contact" ? "active" : ""}`}
          >
            Contact
          </Link>
        </div>
      </nav>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
