import React from "react"
import Illustrations from "../images/Illustrations.inline.svg"
import Maintainence from "../images/Maintainance.inline.svg"
import Responsive from "../images/responsive.inline.svg"
import ServiceCard from "../components/servicesCard"

const services = () => {
  return (
    <div className="container">
      <div className="row mt-5 container">
        <div className="col">
          <h1 className="text-white">Services</h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            maiores aperiam voluptas velit sit accusantium unde temporibus id
            iste dolores eius blanditiis sed odit, esse fugiat illum deleniti
            minus eligendi!
          </p>
          <Illustrations />
        </div>
        <div className="col">
          <div className="row">
            <div className="col">
              <ServiceCard
                className="col"
                CardImage={Maintainence}
                cardTitle="Web Development"
              />
              <ServiceCard
                className="col"
                CardImage={Maintainence}
                cardTitle="Web Development"
              />
            </div>
            <div className="col">
              <ServiceCard
                className="col"
                CardImage={Maintainence}
                cardTitle="Web Development"
              />
              <ServiceCard
                className="col"
                CardImage={Maintainence}
                cardTitle="Web Development"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default services
