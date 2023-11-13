import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"


const SecondPage = () => (
  <Layout>
    <navbar-component
      nav-items='[
        {"text": "Home", "href": "#home"},
        {"text": "About", "href": "#about"},
        {"text": "Services", "href": "#services"},
        {"text": "Contact", "href": "#contact"}
      ]'
    ></navbar-component>
    <h1-web-component content="Hi from the second page"></h1-web-component>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
