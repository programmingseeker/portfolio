import React from "react"
import Layout from "../components/layout"
import Humans from "../images/humans.inline.svg"
import CardOut from "../components/cardOut"
function about() {
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
                <div className="row container">
                  <h1 className="aboutHeader">
                    About<span className="text-pink">Us</span>
                  </h1>
                  <p className="aboutParagraph">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquid, commodi doloremque, fugiat illum magni minus nisi
                    nulla numquam obcaecati
                  </p>
                </div>
                <div className="row d-flex justify-content-center">
                  <CardOut />
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </>
  )
}

export default about
