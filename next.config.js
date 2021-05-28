const withImages = require('next-images');
const withMDX = require('@next/mdx')({
    extension: /\.mdx$/
});
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins(
    [
        [withImages], 
        [withMDX]
    ],
    {
        pageExtensions: ['js', 'jsx', 'mdx']
    }
);