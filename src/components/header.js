import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/logo.inline.svg"
import { useLocation } from "@reach/router"
import { useMediaQuery } from "react-responsive"
function Header({ siteTitle }) {
  const location = useLocation()
  const path = location.pathname ? location.pathname : ""

  const width = useMediaQuery({
    query: "(min-width: 1037px)",
  })
  const Title = () => {
    return (
      <Link to="/" className="title-link ">
        <Logo className="logo" />
        <span>{siteTitle}</span>
      </Link>
    )
  }
  return (
    <>
      {!width ? <Title /> : ""}
      <div className="header">
        {width ? <Title /> : ""}
        <Link to="/" className={`nav-link ${path === "/" ? "active" : ""}`}>
          Home
        </Link>
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
