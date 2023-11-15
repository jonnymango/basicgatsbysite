import * as React from "react"


import Layout from "../components/layout"
import Seo from "../components/seo"
import goldfish from "../images/goldfish.jpeg"

console.log(goldfish)

const IndexPage = () => (
  <Layout>
    <navbar-component
      nav-items='[
        {"text": "Home", "href": "#home"},
        {"text": "About", "href": "#about"},
        {"text": "Services", "href": "#services"},
        {"text": "Contact", "href": "#contact"}
      ]'
    ></navbar-component>
    <h1-web-component content="Welcome to this incredible website"></h1-web-component>
    <p>Welcome content paragraph explaining exactly what we do that is definitely something you should buy right now.</p>
    <h2-web-component>Look at our lovely site</h2-web-component>
   
    <productcard-component 
      image={goldfish} 
      link="/buy-now" 
      title="Our Great Product" 
      description="our great product delivers quality at a great price" 
      price="£16.99"
      ></productcard-component>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
