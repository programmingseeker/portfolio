import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Services from "../components/services"

function services() {
  return (
    <div className="primary-bg">
      <Layout>
        <SEO title="Services" />
        <Services />
      </Layout>
    </div>
  )
}

export default services
