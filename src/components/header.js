import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/logo.inline.svg"

function Header({ siteTitle }) {
  return (
    <>
      <header>
        <div className="header">
          <Link to="/" className="title-link ">
            <Logo className="mb-3" />
            {siteTitle}
          </Link>
          <Link to="/work" className="nav-link ">
            Work
          </Link>
          <Link to="/services" className="nav-link ">
            Services
          </Link>
          <Link to="/about" className="nav-link ">
            about
          </Link>
          <Link to="/contact" className="nav-link ">
            contact
          </Link>
        </div>
      </header>
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
