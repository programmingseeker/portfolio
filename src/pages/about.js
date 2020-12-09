import React from "react"
import Layout from "../components/layout"
import Humans from "../images/humans.inline.svg"
import Profile from "../components/profileCard"

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
                <div className="row ">
                  <Profile />
                  <Profile />
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
