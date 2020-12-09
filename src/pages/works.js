import React from "react"
import Layout from "../components/layout"
import Icon from "../images/cakeop.inline.svg"
import Arrow from "../images/arrow-icon.inline.svg"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// import Image from "../components/image"

function works() {
  const Image = () => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "cakeop-landing.png" }) {
          childImageSharp {
            fixed(width: 715, height: 400) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `)

    if (!data?.placeholderImage?.childImageSharp?.fixed) {
      return <div>Picture not found</div>
    }

    return <Img fixed={data.placeholderImage.childImageSharp.fixed} />
  }
  return (
    <>
      <div className="bg-work">
        <Layout>
          <div className="work-head">
            <span className="text-pink mr-1">Our</span>Works
          </div>
          <div className="work-container container">
            <div className="cards">
              <div className="card-item">
                <div className="card-image-container">
                  <Image className="card-image"></Image>
                </div>
                <div className="card-info">
                  <div className="card-title">
                    <div className="card-title-icon-cover">
                      <Icon className="card-title-icon" />
                    </div>
                    <h2 className="card-title-text">Cakeop</h2>
                  </div>
                  <a
                    href="https://cakeop.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                    to="cakeop.herokuapp.com"
                    className="card-button "
                  >
                    <h3 className="card-btn-txt">Go to the site</h3>
                    <Arrow />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </>
  )
}

export default works
