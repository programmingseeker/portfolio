import React, { useState } from "react"
import Illustrations from "../images/Illustrations.inline.svg"
import Maintainence from "../images/Maintainance.inline.svg"
import Responsive from "../images/responsive.inline.svg"
import ServiceCard from "./servicesCard"
import BlobRight from "../images/blobR.inline.svg"
import BlobLeft from "../images/blobL.inline.svg"
import { useMediaQuery } from "react-responsive"
import useInterval from "../utils/useInterval"

const Services = () => {
  const [count, setCount] = useState(0)
  const [cardData, setCardData] = useState({
    image: Responsive,
    title: "Web Development",
  })
  const width = useMediaQuery({
    query: "(min-width: 1037px)",
  })

  const cardClickHandler = () => {
    setCount(count + 1)
    cardData.title === "Web Development"
      ? setCardData({ image: Maintainence, title: "Web Maintainence" })
      : setCardData({ image: Responsive, title: "Web Development" })
  }

  useInterval(() => {
    cardClickHandler()
  }, 2000)

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
            {width ? (
              <>
                <div className="cards-col col d-flex justify-content-center">
                  <ServiceCard
                    CardImage={Responsive}
                    cardTitle="Web Development"
                  />
                </div>
                <div className="cards-col col d-flex justify-content-center cards-col-2">
                  <ServiceCard
                    CardImage={Maintainence}
                    cardTitle="Web Service"
                  />
                </div>
              </>
            ) : (
              <>
                <div onClick={cardClickHandler}>
                  <ServiceCard
                    CardImage={cardData.image}
                    cardTitle={cardData.title}
                  />
                </div>
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
