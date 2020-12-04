import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/home"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="DevStop" />
    </Layout>
    <Home />
  </>
)

export default IndexPage
