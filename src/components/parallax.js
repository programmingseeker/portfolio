import React, { useRef, useEffect } from "react"

const parallax = () => {
  const sceneEl = useRef(null)

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
      hoverOnly: true,
    })

    parallaxInstance.enable()

    return () => parallaxInstance.disable()
  }, [])

  return (
    <>
      <div className="container">
        <div ref={sceneEl}>{/* html */}</div>
      </div>
    </>
  )
}
export default parallax
