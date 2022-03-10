import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Meta from '../components/head'

const NotFoundPage = () => {
    return (
        <Layout>
            <Meta title="404" />
            <h1>Page not found</h1>
            <p>
                <Link to="/">Go back to home</Link>
            </p>
        </Layout>
    )
}

export default NotFoundPage