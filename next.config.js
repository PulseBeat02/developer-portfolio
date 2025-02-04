/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
}

const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')

module.exports = withNextra(nextConfig)