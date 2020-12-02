import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
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
