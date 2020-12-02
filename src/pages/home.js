import React from "react"
import "../stylesheet/home.scss"
function home() {
  return (
    <>
      <div className="banner">
        <h1 className="banner-text">
          <div className="text-pink mr-1">We</div> Design
        </h1>
        {"\n"}
        <h1 className="banner-text">
          We <div className="text-pink ml-1">Create</div>
        </h1>
      </div>
    </>
  )
}

export default home
