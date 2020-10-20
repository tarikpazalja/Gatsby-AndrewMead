import React from "react"
import { Link } from "gatsby"
import Head from '../components/head'

import Layout from "../components/layout"



const About = () => {
  return (
    <Layout>
      <Head title='About' />
      <h1>About Page</h1>
      <p>This is about page</p>
      <p>
        treba ti developer <Link to="/contact">Contact Me</Link>
      </p>
    </Layout>
  )
}

export default About
