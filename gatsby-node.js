// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/

const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')

    const res = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug // in this case slug is ID
            }
        })
    })
    console.log('success')
}

// // onCreateNode is used for local markdown file reading
// exports.onCreateNode = ({ node, actions }) => {
//     const { createNodeField } = actions

//     if(node.internal.type === 'MarkdownRemark') {
//         const slug = path.basename(node.fileAbsolutePath, '.md')
        
//         createNodeField({
//             node,
//             name: 'slug',
//             value: slug
//         })
//     }
// }

// exports.createPages = async ({ graphql, actions }) => {
//     const { createPage } = actions
//     const blogTemplate = path.resolve('./src/templates/BlogTemplate.js')
//     // graphql functions is promise

//     // 1. Get path to template
//     // 2. Get markdown data
//     // 3. Create new pages
//     const res = await graphql(`
//         query {
//             allMarkdownRemark {
//                 edges {
//                     node {
//                         fields {
//                             slug
//                         }
//                     }
//                 }
//             }
//         }
//     `)

//     res.data.allMarkdownRemark.edges.forEach((edge) => {
//         createPage({
//             component: blogTemplate,
//             path: `/blog/${edge.node.fields.slug}`,
//             context: {
//                 slug: edge.node.fields.slug // in this case slug is ID
//             }
//         })
//     })

// }