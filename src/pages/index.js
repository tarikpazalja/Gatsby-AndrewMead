import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import Head from '../components/head'

export const IndexPage = () => {
  return (
    <Layout>
      <Head title='Home' />
      <h1>Helllooooo</h1>
      <h2>
        ldsfkfk;dsfk;l;l;lkfsd;lskdfldsl;slfk;lsdkflsdlfkl;sfk;lsdklfksdl;iiuyiyuiuyi
      </h2>

      <p>
        treba ti developer <Link to="/contact">Contact Me</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
