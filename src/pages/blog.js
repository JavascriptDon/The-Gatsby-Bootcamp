import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link, useStaticQuery } from 'gatsby'
import * as styles from './blog.module.scss'
import Meta from '../components/head'

const BlogPage = () => {
    const { allContentfulBlogPost: { edges } } = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (
                sort: {
                    fields: publishedDate
                    order: DESC
                }
            ) {
                edges {
                    node {
                        title
                        slug
                        # publishedDate(fromNow: true)
                        # format uses momentjs
                        publishedDate(formatString: "MMMM Do, YYYY")
                    }
                }
            }
        }
    `)

    // const { allMarkdownRemark: { nodes: blogs } } = useStaticQuery(graphql`
    //     query {
    //         allMarkdownRemark {
    //             nodes {
    //                 frontmatter {
    //                     title
    //                     date
    //                 }
    //                 fields {
    //                     slug
    //                 }
    //             }
    //         }
    //     }
    // `)

    return (
        <Layout>
            <Meta title="Blogs" />
            <h1>Blog</h1>
            <ol className={styles.posts}>
                {edges.map((edge, index) =>(
                    <li key={index} className={styles.post}>
                        <Link to={`/blog/${edge.node.slug}`}>
                            <h2>{edge.node.title}</h2>
                            <p>{edge.node.publishedDate}</p>
                        </Link>
                    </li>
                ))}
            </ol>
        </Layout>
    )
}

export default BlogPage
