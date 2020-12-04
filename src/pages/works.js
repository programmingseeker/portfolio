import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
function works() {
  const Image = () => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "cakeop-landing.png" }) {
          childImageSharp {
            fixed(width: 358, height: 200) {
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
              <Image class="card-image"></Image>
              <div class="card-info">
                <h2 class="card-title">Exploring around</h2>
                <p class="card-intro text-dark">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default works
