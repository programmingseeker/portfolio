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
      <div className="container">
        <div className="banner-text">
          <h1>
            <span className="text-pink mr-1">We</span> Design
          </h1>
          {"\n"}
          <h1>
            We <span className="text-pink ml-1">Create</span>
          </h1>
        </div>
        <Mac />
      </div>
    </>
  )
}

export default home
