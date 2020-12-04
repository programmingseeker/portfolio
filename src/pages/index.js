import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/home"

const IndexPage = () => (
  <>
    <div className="back-home">
      <Layout>
        <SEO title="DevStop" />
      </Layout>
      <Home />
    </div>
  </>
)

export default IndexPage
