/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
 require('dotenv').config()

 module.exports = {
   /* Your site config here */
   plugins: [
     'gatsby-plugin-react-helmet',
     {
       resolve: 'gatsby-source-contentful',
       options: {
         spaceId: process.env.CONTENTFUL_SPACE_ID,
         accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
       }
     },
     'gatsby-plugin-image',
     'gatsby-plugin-sass',
     'gatsby-plugin-sharp',
     {
       resolve: 'gatsby-transformer-remark',
       options: {
         plugins: [
           'gatsby-remark-relative-images', // https://www.gatsbyjs.com/plugins/gatsby-remark-images/
           {
             resolve: 'gatsby-remark-images',
             options: {
               maxWidth: 750,
               linkImagesToOriginal: false,
               "loading": "lazy"
             }
           }
         ]
       }
     },
     {
       resolve: 'gatsby-source-filesystem',
       options: {
         name: 'src',
         path: `${__dirname}/src/`
       }
     }
   ],
   siteMetadata: {
     title: 'Agile Blog',
     author: 'Helitha Rupasinghe.',
   }
 }
 