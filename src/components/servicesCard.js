import React from "react"

const servicesCard = ({ CardImage, cardTitle }) => {
  return (
    <div className="primary-light-bg d-flex flex-column justify-content-center servicecard">
      <CardImage className='align-self-center servicecard-image'/>
      <h3>{cardTitle}</h3>
    </div>
  )
}

export default servicesCard
