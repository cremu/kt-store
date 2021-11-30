import Image from 'next/image'

import ProductForm from './ProductForm'

export default function ProductContent({ product }) {
  const originalSrc = product.images.edges[0].node.originalSrc
  const altText = product.images.edges[0].node.altText

  return (
    <div className='w-full bg-white flex flex-col justify-center items-center md:flex-row'>
      {/* Product Images */}
      <div className='w-full h-96 bg-gray-100 flex flex-col justify-center items-center'>
        <div className='relative w-64 h-64 bg-green-200'>
          <Image src={originalSrc} alt={altText} layout='fill' objectFit='cover' priority />
        </div>
      </div>
      {/* Product Form */}
      <div className='w-full h-auto p-5 bg-gray-300'>
        <ProductForm product={product} />
      </div>
    </div>
  )
}
