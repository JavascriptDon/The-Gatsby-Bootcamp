import React from 'react'
import Layout from '../components/Layout'
import Meta from '../components/head'
import { Link } from "gatsby"

const AboutPage = () => {
    return (
        <Layout>
            <Meta title="About" />
            <h1>AboutPage</h1>
            <p> I’m currently learning the MERN stack which is the tool to use for faster end-to-end development.</p>
            <p><Link to="/contact">Want to work with me? Reach out.</Link> </p>
        </Layout>
    )
}

export default AboutPage
