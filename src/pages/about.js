import React from "react"
import Layout from "../components/layout"
import Humans from "../images/humans.inline.svg"
import Profile from "../components/profileCard"

function about() {
  const data = [
    {
      name: "Gaurav S Rao",
      about:
        "commodi doloremque, fugiat illum magni minus nisinulla numquam obcaecati placeat quia, repellat tempore voluptatum",
      linkedin: "https://linkedin.com/in/gaurav-s-rao-257a911b1",
      twitter: "https://twitter.com/gaurav_s_rao",
      instagram: "https://www.instagram.com/gaurav_s_rao/",
      facebook: "",
    },
    {
      name: "Krtin U Shet",
      about:
        "commodi doloremque, fugiat illum magni minus nisinulla numquam obcaecati placeat quia, repellat tempore voluptatum",
      linkedin: "linkedin.com/",
      instagram: "https://www.instagram.com/",
      facebook: "",
      twitter: "",
    },
  ]
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
                  <h1 className="aboutHeader">
                    About<span className="text-pink">Us</span>
                  </h1>
                  <p className="aboutParagraph">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquid, commodi doloremque, fugiat illum magni minus nisi
                    nulla numquam obcaecati placeat quia, repellat tempore
                    voluptatum.
                  </p>
                </div>
                <div className="row d-flex ">
                  {data.map(info => {
                    // facebook,instagram,twitter,linkedin
                    return (
                      <Profile
                        facebook={info.facebook}
                        instagram={info.instagram}
                        twitter={info.twitter}
                        linkedin={info.linkedin}
                        name={info.name}
                        about={info.about}
                      />
                    )
                  })}
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
