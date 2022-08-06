// here we're taking advantage of React by making this component
// because this will be used in every page for SEO.

import * as React from 'react'
import {Helmet} from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby' 


export function Seo(props) {
    const data = useStaticQuery(graphql`
    query GetSiteMetadata {
        site {
          siteMetadata {
            title
            siteUrl
            image
            description
          }
        }
      }
       
    `)

    const defaults = data?.site?.siteMetadata;

    const title = props.title || defaults.title;
    const description = props.description || defaults.description;
    const image = new URL(props.image || defaults.image, defaults.siteUrl);
    const url = new URL(props.path || '/', defaults.siteUrl)//we gonna do a cannonical url

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />
            {image && <meta name="image" content={image} />} 

            <meta property="og:url" content={url} /> 
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {image && <meta name="image" content={image} />} 

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={title} />
            {image && <meta name="twitter:image" content={image} />} 
            
        </Helmet> // we have grabbed out default metadata from queryMetadata
        // we are exporting a prop called Seo, that accepts props with title, desc, image and path
        // we are returning all of the SEO tags we need, not just to manage the browser display but also on google, twiiter , facebook etc.
        
    )
}