module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.yourdomain.tld',
        title: "Blog Website Using Gatsby",
        description: "First Blog Site Made Using Gatsby",
        image: ''    
    },
    plugins: [
        'gatsby-plugin-react-helmet',
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
            options: {},
        }
    ]
}