/*******************************************************************************
 * Project : thameem.me
 * Filename : next.config.js
 * Author : thameem
 * Modified time : Sat, 26 Nov 2022 at 12:18 pm India Standard Time
 ******************************************************************************/

/** @type {import('next').NextConfig} */

// todo - load links from contants

const nextConfig = {

    reactStrictMode: true,
    images: {
      domains: ['res.cloudinary.com'],
    },  
    swcMinify: true,
    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
    },
    redirects() {
        return [
          {
            source: '/instagram',
            destination: 'https://www.instagram.com/k__thameem/',
            permanent: true,
          },
          {
            source: '/facebook',
            destination: 'https://www.facebook.com/thameem.karakkoth/',
            permanent: true,
          },
          {
            source: '/github',
            destination: 'https://github.com/thameemk/',
            permanent: true,
          },
          {
            source: '/twitter',
            destination: 'https://twitter.com/k__thameem',
            permanent: true,
          },
          {
            source: '/linkedin',
            destination: 'https://www.linkedin.com/in/thameem-karakkoth/',
            permanent: true,
          },
          {
            source: '/medium',
            destination: 'https://medium.com/@thameem_k',
            permanent: true,
          },
        ]
    }
}

module.exports = nextConfig
