import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function ProfileCard() {
  // const [active, setActive] = useState(false)
  const Image = ({ customer }) => {
    const data = useStaticQuery(graphql`
      query {
        customer1: file(relativePath: { eq: "customer-profile1.jpg" }) {
          childImageSharp {
            fixed(width: 100, height: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        customer2: file(relativePath: { eq: "customer-profile2.jpg" }) {
          childImageSharp {
            fixed(width: 100, height: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `)

    function errorHandler() {
      return <div>Picture not found</div>
    }

    if (!data?.customer1?.childImageSharp?.fixed) {
    } else if (!data?.customer2?.childImageSharp?.fixed) {
      return <div>Picture not found</div>
    }
    switch (customer) {
      case 1:
        return (
          <Img
            fixed={data.customer1.childImageSharp.fixed}
            onError={errorHandler}
          />
        )
      case 2:
        return <Img fixed={data.customer2.childImageSharp.fixed} />
      default:
        return ""
    }
  }

  // <div className="container profile-card-container">
  //   <div className="profile-card">
  //     <div className="profile-photo">
  //       <Image customer={1} />
  //     </div>
  //     <div className="profile-desc">
  //       <h3>
  //         Gaurav S Rao
  //         <br /> <span>Full Stack Developer</span>
  //       </h3>
  //       <p className="text-wrap">akljfshgdkjahsgfkjhsfdkjhsdfkgjkhjsfdg</p>
  //     </div>
  //   </div>
  //   <div className="profile-card">
  //     <div className="profile-photo">
  //       <Image customer={2} />
  //     </div>
  //     <div className="profile-desc">
  //       <h3>
  //         Krtin U Shet
  //         <br /> <span>Full Stack Developer</span>
  //       </h3>
  //       <p className="text-wrap">akljfshgdkjahsgfkjhsfdkjhsdfkgjkhjsfdg</p>
  //     </div>
  //   </div>
  // </div>
  return (
    <>
      <div className="modal">
        <div className="profile-photo">
          <Image customer={1} />
        </div>
        <div className="close"></div>
      </div>

      <div className="container profile-card-container">
        <div className="profile-card">
          <div className="card-header">
            <div className="hamburger-menu">
              <div className="center"></div>
            </div>
            <a href="!#" className="mail">
              <i className="far fa-envelope"></i>
            </a>
            <div className="main">
              <div className="image">
                <div className="hover">
                  <i className="fas fa-camera fa-2x"></i>
                </div>
              </div>
              <h3 className="name">John Doe</h3>
              <h3 className="sub-name">@J_Doe</h3>
            </div>
          </div>

          <div className="content">
            <div className="left">
              <div className="profile-about-container">
                <h3 className="title">About</h3>
                <p className="text">
                  Lorem Ipsum is simply text of the printing and types industry.
                </p>
              </div>
              <div className="icons-container">
                <a href="!#" className="icon">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="!#" className="icon">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="!#" className="icon">
                  <i className="fab fa-google-plus-g"></i>
                </a>
                <a href="!#" className="icon">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
              <div className="buttons-wrap">
                <div className="follow-wrap">
                  <a href="!#" className="follow">
                    Follow
                  </a>
                </div>
                <div className="share-wrap">
                  <a href="!#" className="share">
                    Share
                  </a>
                </div>
              </div>
            </div>

            <div className="right">
              <div>
                <h3 className="number">91</h3>
                <h3 className="number-title">Posts</h3>
              </div>
              <div>
                <h3 className="number">2.4K</h3>
                <h3 className="number-title">Following</h3>
              </div>
              <div>
                <h3 className="number">4.7K</h3>
                <h3 className="number-title">Followers</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileCard
