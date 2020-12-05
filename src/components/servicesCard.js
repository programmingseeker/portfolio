import React from "react"

const servicesCard = ({ CardImage, cardTitle }) => {
  return (
    <div
      className="primary-light-bg d-flex flex-column justify-content-center service-card p-2"
      style={{
        padding:'2rem'
      }}
    >
      <CardImage className="align-self-center" />
      <h4 className="h4 text-primary justify-content-center align-self-center mt-3">
        {cardTitle}
      </h4>
    </div>
  )
}

export default servicesCard
