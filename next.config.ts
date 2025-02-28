import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: `${process.env.Source}`,
        destination: `${process.env.NEXTAUTH_URL}${process.env.Source}`
      },
    ]
  },
}

export default nextConfig
