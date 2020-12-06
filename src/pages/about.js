import React from "react"
import Layout from "../components/layout"
import Humans from "../images/humans.inline.svg"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
function about() {
  const Image = () => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "macbook.inline.png" }) {
          childImageSharp {
            fixed(width: 1550, height: 1560) {
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
      <div className="primary-bg bg-about">
        <Layout>
          <div className="about-container container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 ">
                <Humans className="humans-about-us" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 ">
                <div className="row">
                  <h1>
                    About<span className="text-pink">Us</span>
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquid, commodi doloremque, fugiat illum magni minus nisi
                    nulla numquam obcaecati placeat quia, repellat tempore
                    voluptatum.
                  </p>
                </div>
                <div className="row"></div>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </>
  )
}

export default about
