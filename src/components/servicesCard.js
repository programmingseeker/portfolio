import React from "react"

const servicesCard = ({ CardImage, cardTitle }) => {
  return (
    <div className="primary-light-bg d-flex flex-column justify-content-center service-card p-4 ">
      <CardImage className="align-self-center" />
      <h4 className="h4 text-primary justify-content-center align-self-center mt-3 is-active">
        {cardTitle}
      </h4>
    </div>
  )
}

export default servicesCard
