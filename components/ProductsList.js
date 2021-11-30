import ProductCard from './ProductCard'

export default function ProductList({ products }) {
  return (
    <div className=''>
      <div className='flex flex-row flex-nowrap'>
        {products.map((product) => (
          <ProductCard key={product.node.id} product={product} />
        ))}
      </div>
    </div>
  )
}
