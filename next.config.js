/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
        {
            protocol: 'https',
            hostname: 'loremflickr.com',
            port: '',            
          },
          {
            hostname:"encrypted-tbn0.gstatic.com"
          },
          {
            hostname:"www.lg.com"
          },
          {
            hostname:"i.blogs.es"
          }
          
        ]
    }
}

module.exports = nextConfig
