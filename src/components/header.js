import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import Logo from "../images/logo.inline.svg"
import { useLocation } from "@reach/router"
function Header({ siteTitle }) {
  const [width, setWidth] = useState(null)
  const location = useLocation()
  const path = location.pathname ? location.pathname : ""
  useEffect(() => {
    if (typeof window === "undefined") return

    console.log(width)
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [width])

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
      {width <= 768 ? <Title /> : ""}
      <div className="header">
        {width >= 768 ? <Title /> : ""}
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
