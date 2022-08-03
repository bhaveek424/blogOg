import * as React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import { Seo } from './seo'

export default function Layout({
    children,
    title = false,
    description = false,
    image = false,
    path = false, // its easier to explicitly say just make it falss instead of letting it check if its undefined or default

}) {
     const data = useStaticQuery(graphql`
     query GetSiteTitle {
        site {
            siteMetadata {
                title
                }
            }
        }
    `) 

     const meta = data?.site?.siteMetadata ?? {}   
     
     return (
        <>
            <Seo title={title} description={description} image={image} path={path} />
            <header>
                <Link to="/">{meta.title}</Link> 
                <nav>
                    <Link to="/about">About</Link> 
                </nav>
            </header>
            <main>{children}</main>
        </>
     )
}