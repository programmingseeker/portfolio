import React, { useState, useEffect } from "react"
import Illustrations from "../images/Illustrations.inline.svg"
import Maintainence from "../images/Maintainance.inline.svg"
import Responsive from "../images/responsive.inline.svg"
import ServiceCard from "./servicesCard"
import BlobRight from "../images/blobR.inline.svg"
import BlobLeft from "../images/blobL.inline.svg"

const Services = () => {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    if (typeof window === "undefined") return
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [width])

  return (
    <>
      <div className="services-body container">
        <BlobRight className="services-blob-right " />
        <div className="service-main text-primary col-lg-6 col-md-6 col-sm-12">
          <h1>Services</h1>
          <p className="service-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            cupiditate dolorem adipisci ad ratione iusto fuga placeat, expedita,
            velit eligendi veniam! Tempore molestiae enim eveniet iusto eius
            officiis
          </p>
          <Illustrations className="service-illustration" />
        </div>
        <div className="service-cards-section col-lg-6 col-md-6 col-sm-12">
          <div className="cards-row row">
            {width >= 1037 ? (
              <>
                <div className="cards-col col">
                  <ServiceCard
                    CardImage={Responsive}
                    cardTitle="Web Development"
                  />
                </div>
                <div className="cards-col col cards-col-2">
                  <ServiceCard
                    CardImage={Maintainence}
                    cardTitle="Web Service"
                  />
                </div>
              </>
            ) : (
              <>
                <ServiceCard CardImage={Responsive} cardTitle="Web Develt" />
                <ServiceCard CardImage={Maintainence} cardTitle="Web Service" />
              </>
            )}
          </div>
        </div>
        <BlobLeft className="services-blob-left" />
      </div>
    </>
  )
}

export default Services
