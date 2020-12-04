import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/home"

const IndexPage = () => (
  <>
    <div className="bg-home">
      <Layout>
        <SEO title="DevStop" />
        <Home />
      </Layout>
    </div>
  </>
)

export default IndexPage
