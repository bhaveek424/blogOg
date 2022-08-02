import * as React from 'react';
import { Link } from 'gatsby';
import { Seo } from '../components/seo'; 

export default function IndexPage(){
    return (
      <>
        <Seo 
            title="About This Site"
            descrition="More information about this site." />
        <main>
            <h1>About This Site</h1>
            <Link to="/">Back to home</Link>

        </main>
      </>
    )
}