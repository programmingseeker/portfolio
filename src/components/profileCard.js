import React from "react"

function profileCard() {
  return (
    <div className="profile-card">
      <div id="profile">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/225748/profile.jpg"
          alt="User"
        />
        <h1>Iva Dopuđ</h1>
        <p>Front-end Web Developer</p>
        <div class="info">
          <i class="fa fa-info fa-1x block"></i>
          <i class="fa fa-angle-down fa-2x block"></i>
          <p>
            In short, I spend my earthly time striving to create some darned
            awesome UI designs, and also develop a few. Student @{" "}
            <a href="http://en.ict.edu.rs/" target="_blank">
              ICT College
            </a>
            .
          </p>
          <p>Find me on:</p>
          <a
            class="link"
            href="https://twitter.com/Masquetina/"
            target="_blank"
          >
            <i class="fa fa-twitter fa-2x social"></i>
          </a>
          <a
            class="link"
            href="http://dribbble.com/Masquetina/"
            target="_blank"
          >
            <i class="fa fa-dribbble fa-2x social"></i>
          </a>
          <a class="link" href="https://codepen.io/Masquetina" target="_blank">
            <i class="fa fa-codepen fa-2x social"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default profileCard
