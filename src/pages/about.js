import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';


export default function IndexPage(){
    return (
      <Layout
        
            title="About This Site"
            descrition="More information about this site." >
            <h1>About This Site</h1>
            <Link to="/">Back to home</Link>

      </Layout>
    )
}