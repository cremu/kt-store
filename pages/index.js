import { getProductsFromCollection } from '../lib/shopify'
import ProductsList from '../components/ProductsList'
import Container from '../components/Container'

export default function Home({ products }) {
  return (
    <Container isStickyNav>
      <section className='h-96 bg-gray-100'>
        <div className='max-w-screen-lg mx-auto px-5 py-8'>
          <h1 className='text-blue-800 text-6xl tracking-tighter'>Welcome to Krúttlegt</h1>
          <h2>New site for KT made with Nextjs + Tailwind+ Shopify Storefront API!</h2>
        </div>
      </section>
      <section className='max-w-screen-lg mx-auto px-5 py-8'>
        <h3 className='text-black'>Collections</h3>
      </section>
      <section className='max-w-screen-lg mx-auto px-5 py-8'>
        <h3 className='text-black'>Our Favourites</h3>
        <p>Selection of our most beloved gift cards</p>
        <ProductsList products={products} />
      </section>
    </Container>
  )
}

export async function getStaticProps() {
  const products = await getProductsFromCollection('our-favourites')

  return {
    props: {
      products
    }
  }
}
