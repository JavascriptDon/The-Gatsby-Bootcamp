import React from 'react'
import Layout from '../components/Layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { graphql } from 'gatsby'
import Meta from '../components/head'

export const query = graphql`
    query ($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            body {
                raw
                references {
                    file {
                        url
                    }
                }
            }
        }
    }
`

const Blog = ({ data: { contentfulBlogPost } }) => {
    // const options = {
    //     renderNode: {
    //         "embedded-asset-block": node => {
    //             console.log(node)
    //             const alt = node.data.target.fields.title['en-US']
    //             const url = node.data.target.fields.title['en-US'].url
    //             return  <img alt={alt} src={url} />
    //         }
    //     }
    // }
    return (
        <Layout>
            <Meta title={contentfulBlogPost.title} />
            <h1>{contentfulBlogPost.title}</h1>
            <p>{contentfulBlogPost.publishedDate}</p>
            { contentfulBlogPost.body.references.length > 0 ? <img src={contentfulBlogPost.body.references[0].file.url} alt={contentfulBlogPost.title} /> : '' }
            {documentToReactComponents(JSON.parse(contentfulBlogPost.body.raw))}
            {/* <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} /> */}
        </Layout>
    )
}

export default Blog

// // Can't implement static query for dynamic page generating
// export const query = graphql`
//     query ($slug: String!) {
//         markdownRemark(
//             fields: {
//                 slug: {
//                     eq: $slug
//                 }
//             }
//         ) {
//             frontmatter {
//                 title
//                 date
//             }
//             html
//         }
//     }
// `
