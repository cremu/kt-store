import Container from '../../components/Container'
import ProductContent from '../../components/ProductContent'
import { getAllProductHandles, getProductByHandle } from '../../lib/shopify'

export default function ProductPage({ product }) {
  return (
    <Container>
      <section className='mx-auto max-w-screen-lg px-5 py-8'>
        <ProductContent product={product} />
      </section>
    </Container>
  )
}

export async function getStaticPaths() {
  const productHandles = await getAllProductHandles()
  const paths = productHandles.map((item) => {
    const product = String(item.node.handle)

    return {
      params: {
        product
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const product = await getProductByHandle(params.product)

  return {
    props: {
      product
    }
  }
}
