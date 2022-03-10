import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import Meta from '../components/head'

const Home = () => {
  return (
    <div>
      <Meta title="Home" />
      <Layout>
        <h1>Agile Blog</h1>
        <h2>I'm Helitha Rupasinghe, a passionate developer living in the UK.</h2>
        <p>
          Need a developer?
          <Link to="/contact">Contact me.</Link>
        </p> 
      </Layout>
    </div>
  )
}

export default Home
