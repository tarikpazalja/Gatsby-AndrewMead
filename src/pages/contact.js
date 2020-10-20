import React from "react"
import Head from '../components/head'

import Layout from "../components/layout"

const Contact = () => {
  return (
    <Layout>
      <Head title='Contact'></Head>
      <h1>Contact Page</h1>
      <p>This is Contact Page</p>
      <p>
        Link za Twittter{" "}
        <a
          href="https://twitter.com/@Tarik08003394"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
      </p>
    </Layout>
  )
}

export default Contact
