import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

export const query = graphql`
  query CoctailQuery {
  file(name: {eq: "cocktail"}) {
    childImageSharp {
      gatsbyImageData(placeholder: DOMINANT_COLOR)
    }
  }
}

` //anything we run as a query like this is gonna get injected in props in the function below
// we can use and should use getStaticQuery
// also we can do this same thing in mdx files.
export default function IndexPage({data}){
    return (
      <Layout
        
            title="About This Site"
            descrition="More information about this site." >
              <GatsbyImage
                image={getImage(data.file)}
                alt="a cocktail set inside an elaborate floral arrangement with dry ice mist curling around it."
              />
            <h1>About This Site</h1>
            <Link to="/">Back to home</Link>

      </Layout>
    )
}