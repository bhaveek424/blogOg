module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.yourdomain.tld',
        title: "Blog Website Using Gatsby",
        description: "First Blog Site Made Using Gatsby",
        image: ''    
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        //This set of plugins is to enable creating MDX blog posts from src/posts folder
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: `${__dirname}/src/posts`,
            }
        },
        {
            resolve: 'gatsby-plugin-page-creator',
            options: {
                path: `${__dirname}/src/posts`, // these two wll not only allow gatsby to find them and load them into
                // graphql but also turn them into pages with their own address that matches the name of the file.
            },
        },
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                defaultLayouts: {
                    posts: require.resolve('./src/components/post-layout.js'), // so by this we don't need to import manually in every blog page .
                }
            },
        }
        // end of MDX config
    ]
}