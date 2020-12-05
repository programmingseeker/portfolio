import React from "react"
import Illustrations from "../images/Illustrations.inline.svg"
import Maintainence from "../images/Maintainance.inline.svg"
import Responsive from "../images/responsive.inline.svg"
import ServiceCard from "./servicesCard"
import BlobRight from "../images/blobR.inline.svg"
import BlobLeft from "../images/blobL.inline.svg"

const services = () => {
  return (
    <>
      <BlobRight className="services-blob-right " />
      <div className="services-body">
        <div className="service-main text-primary">
          <h1 className="service-header">Services</h1>
          <p className="service-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            cupiditate dolorem adipisci ad ratione iusto fuga placeat, expedita,
            velit eligendi veniam! Tempore molestiae enim eveniet iusto eius
            officiis saepe nulla ducimus facilis quos laudantium hic temporibus
            suscipit, quo inventore assumenda consequuntur libero tenetur magnam
            dolore.
          </p>
          <Illustrations className="service-illustration" />
        </div>
        <div className="service-cards-section">
          <div className="cards-row">
            <div className="cards-col">
              <ServiceCard
                CardImage={Responsive}
                cardTitle="Web Development"
              />
            </div>
            <div className="cards-col cards-col-2">
              <ServiceCard
                CardImage={Maintainence}
                cardTitle="Web Service"
              />
            </div>
          </div>
        </div>
      </div>
      <BlobLeft className="services-blob-left" />
    </>
  )
}

export default services
