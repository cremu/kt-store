const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN
const storefrontAccessToken = process.env.NEXT_PUBLIC_STOREFRONT_ACCESS_TOKEN

async function callShopify(query) {
  const URL = `https://${domain}/api/2021-10/graphql.json`
  const params = {
    endpoint: URL,
    method: 'POST',
    headers: {
      'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  }
  try {
    const data = await fetch(URL, params).then((response) => response.json())
    return data
  } catch (error) {
    throw new Error('Data could not be fetched')
  }
}

/**
 * Returns: handles and ids of all products in the store.
 */
export async function getAllProductHandles() {
  const query = `{
    products(first: 250) {
      edges {
        node {
          handle
          id
        }
      }
    }
  }`
  const response = await callShopify(query)
  const productHandles = response.data.products.edges ? response.data.products.edges : []

  return productHandles
}
/**
 * Returns: a specific product.
 *
 * @param {string} handle The handle of the product.
 */
export async function getProductByHandle(handle) {
  const query = `{
    productByHandle(handle: "${handle}") {
      id
      handle
      title
      description
      seo {
        title
        description
      }
      images(first: 15) {
        edges {
          node {
            id
            originalSrc    
            altText
            width
            height             
          }
        }
      }
      options {
        id
        name
        values
      }
      variants(first: 15) {
        edges {
          node {
            id
            title
            selectedOptions {
              name
              value
            }
            image {
              id
              originalSrc
              altText
              width
              height
            }
            currentlyNotInStock
            priceV2 {
              amount
              currencyCode
            }
            compareAtPriceV2 {
              amount
              currencyCode
            }                
          }
        }
      }
    }
  }`
  const response = await callShopify(query)
  const product = response.data.productByHandle ? response.data.productByHandle : []

  return product
}
/**
 * Returns: all products from a specific collection.
 *
 * @param {string} collection The title of the collection.
 */
export async function getProductsFromCollection(collection) {
  const query = `{
    collectionByHandle(handle: "${collection}") {
      products(first: 15) {
        edges {
          node {
            id
            handle
            title
            description
            seo {
              title
              description
            }
            totalInventory
            priceRange {
              minVariantPrice {
                amount
              }
            }
            images(first: 1) {
              edges {
                node {
                  id
                  originalSrc    
                  altText
                  width
                  height             
                }
              }
            }
            variants(first: 15) {
              edges {
                node {
                  id
                  title
                  currentlyNotInStock
                  priceV2 {
                    amount
                    currencyCode
                  }
                  compareAtPriceV2 {
                    amount
                    currencyCode
                  }                
                }
              }
            }
          }
        }
      }
    }
  }`
  const response = await callShopify(query)
  const productsFromCollection = response.data.collectionByHandle.products.edges
    ? response.data.collectionByHandle.products.edges
    : []
  return productsFromCollection
}
