import React, { useState } from "react"
import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMapMarkedAlt,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons"
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"
function Contact() {
  const [focus, setFocus] = useState(null)
  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [phone, setphone] = useState(null)
  const [message, setmessage] = useState("")
  return (
    <>
      <Layout>
        <div className="container-contact">
          <span className="bg-circle"></span>
          <div className="form-contact">
            <div className="contact-info ">
              <h3 className="title-contact">Contact Information</h3>
              <p className="text-contact">
                Fill up the form and out Team Will get back to you within 24
                hours
              </p>
              <div className="info">
                <div className="information d-flex align-items-center ">
                  <FontAwesomeIcon
                    icon={faMapMarkedAlt}
                    className="mr-2"
                    style={{ fontSize: "25px" }}
                  ></FontAwesomeIcon>
                  <p> Bangalore India 560079</p>
                </div>
                <div className="information d-flex align-items-center ">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className=" mr-2"
                    style={{
                      fontSize: "25px",
                      color: "linear-gradient(89.94deg, #0077b6 20%, #00b4d8)",
                    }}
                  ></FontAwesomeIcon>
                  <p>programmingseeker@gmail.com</p>
                </div>
                <div className="information d-flex align-items-center ">
                  <FontAwesomeIcon
                    icon={faPhoneAlt}
                    className="mr-2"
                    style={{ fontSize: "25px" }}
                  ></FontAwesomeIcon>
                  <p>+91 9731362928/7019105904</p>
                </div>
              </div>
              <div className="social-media">
                <div className="social-icons">
                  <a href="!#">
                    <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                  </a>
                  <a href="!#">
                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                  </a>
                  <a href="!#">
                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                  </a>
                  <a href="!#">
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      className="fab fa-linkedin-in"
                    ></FontAwesomeIcon>
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <span className="circle one"></span>
              <span className="circle two"></span>

              <form className="form-contact-text" autocomplete="off">
                <div className={`input-container ${focus ? "focus" : null}`}>
                  <input
                    onFocus={() => {
                      setFocus("focus")
                    }}
                    onBlur={e => {
                      e.target.value === "" ? setFocus(null) : setFocus("focus")
                    }}
                    type="text-contact"
                    name="name"
                    className="input"
                    value={username}
                    onChange={e => {
                      setusername(e.target.value)
                    }}
                  />
                  <label>Username</label>
                  <span>Username</span>
                </div>
                <div className={`input-container ${focus ? "focus" : null}`}>
                  <input
                    onFocus={() => {
                      setFocus("focus")
                    }}
                    onBlur={e => {
                      e.target.value === "" ? setFocus(null) : setFocus("focus")
                    }}
                    type="email"
                    name="email"
                    className="input"
                    value={email}
                    onChange={e => {
                      setemail(e.target.value)
                    }}
                  />
                  <label>Email</label>
                  <span>Email</span>
                </div>
                <div className={`input-container ${focus ? "focus" : null}`}>
                  <input
                    onFocus={() => {
                      setFocus("focus")
                    }}
                    onBlur={e => {
                      e.target.value === "" ? setFocus(null) : setFocus("focus")
                    }}
                    type="numeric"
                    name="phone"
                    className="input"
                    value={phone}
                    onChange={e => {
                      setphone(e.target.value)
                    }}
                  />
                  <label>Phone</label>
                  <span>Phone</span>
                </div>
                <div
                  className={`input-container textareaout ${
                    focus ? "focus" : null
                  }`}
                >
                  <textarea
                    name="message"
                    className="input textarea"
                    value={message}
                    onFocus={() => {
                      setFocus("focus")
                    }}
                    onBlur={e => {
                      e.target.value === "" ? setFocus(null) : setFocus("focus")
                    }}
                    onChange={e => {
                      setmessage(e.target.value)
                    }}
                  ></textarea>
                  <label>Message</label>
                  <span>Message</span>
                </div>
                <button type="submit" className="sumbit-contact-btn">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Contact
