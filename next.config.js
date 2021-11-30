module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN,
    NEXT_PUBLIC_STOREFRONT_ACCESS_TOKEN: process.env.NEXT_PUBLIC_STOREFRONT_ACCESS_TOKEN
  },
  images: {
    domains: ['cdn.shopify.com']
  }
}
