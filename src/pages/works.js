import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Icon from "../images/cakeop.inline.svg"
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
        <Layout />
        <div class="work-head">
          <span className="text-pink mr-1">Our</span>Works
        </div>
        <div class="container">
          <div class="cards">
            <div class="card-item">
              <div className="card-image-container">
                <Image class="card-image"></Image>
              </div>
              <div class="card-info">
                <div class="card-title">
                  <div className="card-title-icon-cover">
                    <Icon class="card-title-icon" />
                  </div>
                  <h2 className="card-title-text">Cakeop</h2>
                </div>
                <div class="card-button "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default works
