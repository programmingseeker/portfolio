import React from "react"
import "../stylesheet/home.scss"
import Mac from "../images/base.inline.svg"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

function home() {
  // const Image = () => {
  //   const data = useStaticQuery(graphql`
  //     query {
  //       placeholderImage: file(relativePath: { eq: "macbook.inline.png" }) {
  //         childImageSharp {
  //           fixed(width: 1550, height: 1560) {
  //             ...GatsbyImageSharpFixed
  //           }
  //         }
  //       }
  //     }
  //   `)

  //   if (!data?.placeholderImage?.childImageSharp?.fixed) {
  //     return <div>Picture not found</div>
  //   }

  //   return <Img fixed={data.placeholderImage.childImageSharp.fixed} />
  // }

  return (
    <>
      <div className="container ">
        <div className="row banner ">
          <div className="col-lg-6 col-md-6 col-sm-12 banner-text-div">
            <h1 className="banner-text">
              <span className="text-pink mr-1">We</span> Design
            </h1>
            {"\n"}
            <h1 className="banner-text">
              We <span className="text-pink ml-1">Create</span>
            </h1>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 macbook-div">
            <Mac className="macbook" />
          </div>
        </div>
      </div>
    </>
  )
}

export default home
