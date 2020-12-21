import React, { useState } from "react"
import Profile from "../components/profileCard"
import { useMediaQuery } from "react-responsive"
import useInterval from "../utils/useInterval"
function CardOut() {
  const [count, setCount] = useState(0)
  const data = [
    {
      name: "Gaurav S Rao",
      about:
        "commodi doloremque, fugiat illum magni minus nisinulla numquam obcaecati placeat ",
      linkedin: "https://linkedin.com/in/gaurav-s-rao-257a911b1",
      twitter: "https://twitter.com/gaurav_s_rao",
      instagram: "https://www.instagram.com/gaurav_s_rao/",
      facebook: "",
    },
    {
      name: "Krtin U Shet",
      about:
        "commodi doloremque, fugiat illum magni minus nisinulla numquam obcaecati adgadjhgkajd ",
      linkedin: "linkedin.com/",
      instagram: "https://www.instagram.com/",
      facebook: "",
      twitter: "",
    },
  ]

  const [cardData, setCardData] = useState({ ...data[0] })

  const cardClickHandler = () => {
    setCount(count + 1)
    cardData.name === "Gaurav S Rao"
      ? setCardData({ ...data[1] })
      : setCardData({ ...data[0] })
  }

  useInterval(() => {
    cardClickHandler()
  }, 2500)

  const width = useMediaQuery({
    query: "(min-width: 1200px)",
  })

  return (
    <>
      {width ? (
        data.map(info => {
          // facebook,instagram,twitter,linkedin
          return (
            <Profile
              facebook={info.facebook}
              instagram={info.instagram}
              twitter={info.twitter}
              linkedin={info.linkedin}
              name={info.name}
              about={info.about}
            />
          )
        })
      ) : (
        <Profile
          onClick={cardClickHandler}
          className="d-flex "
          facebook={cardData.facebook}
          instagram={cardData.instagram}
          twitter={cardData.twitter}
          linkedin={cardData.linkedin}
          name={cardData.name}
          about={cardData.about}
        />
      )}
    </>
  )
}

export default CardOut
