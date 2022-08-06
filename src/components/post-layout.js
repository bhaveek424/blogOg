import * as React from 'react';
import{ Link } from 'gatsby';
import Layout from './layout';

export default function PostLayout({ children, pageContext }) {
    const { title, description} = pageContext.frontmatter // in future if we want to add more fields to it like we wanna add twitter author, we just 
                                                          // need to modify seo.js and add the frontmatter fields and pull them here


    return (
        <Layout title={title} description={description}>
            {children}
            <Link to="/">&larr; back</Link>
        </Layout>
    )
}
