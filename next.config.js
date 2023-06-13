/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/auth/n8n/test',
        destination:
          'https://bouncesports.app.n8n.cloud/webhook-test/10022ab0-8651-409d-bb55-a1739efd1cfa',
      },
      {
        source: '/api/auth/n8n',
        destination:
          'https://bouncesports.app.n8n.cloud/webhook/10022ab0-8651-409d-bb55-a1739efd1cfa',
      },
      {
        source: '/api/club/n8n/test',
        destination:
          'https://bouncesports.app.n8n.cloud/webhook-test/877ad989-7f7c-49bb-b8b7-500f3ea578f0',
      },
      {
        source: '/api/club/n8n',
        destination:
          'https://bouncesports.app.n8n.cloud/webhook/877ad989-7f7c-49bb-b8b7-500f3ea578f0',
      },
      {
        source: '/api/collectRequest/n8n/test',
        destination:
          'https://bouncesports.app.n8n.cloud/webhook-test/193ad431-9c55-4679-bd8e-4b0f3bdc213f',
      },
      {
        source: '/api/collectRequest/n8n',
        destination:
          'https://bouncesports.app.n8n.cloud/webhook/193ad431-9c55-4679-bd8e-4b0f3bdc213f',
      },
      {
        source: '/api/orderCardbox/n8n/test',
        destination:
          'https://bouncesports.app.n8n.cloud/webhook-test/order-cardbox',
      },
      {
        source: '/api/orderCardbox/n8n',
        destination: 'https://bouncesports.app.n8n.cloud/webhook/order-cardbox',
      },
      {
        source: '/api/contact/n8n/test',
        destination:
          'https://bouncesports.app.n8n.cloud/webhook-test/018447c2-30c5-40ed-8ed2-a2e25b59442f',
      },
      {
        source: '/api/contact/n8n',
        destination:
          'https://bouncesports.app.n8n.cloud/webhook/018447c2-30c5-40ed-8ed2-a2e25b59442f',
      },
    ];
  },
});
