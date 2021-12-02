import Image from 'next/image'

import ProductForm from './ProductForm'

export default function ProductContent({ product }) {
  const originalSrc = product.images.edges[0].node.originalSrc
  const altText = product.images.edges[0].node.altText
  const width = product.images.edges[0].node.width
  const height = product.images.edges[0].node.height

  return (
    <>
      {/* Product Images 
      <div className='w-full flex flex-col justify-center items-center md:flex-row'>
        <div className='w-full h-96 bg-gray-100 flex flex-col justify-center items-center'>
          <div className='relative w-64 h-64 bg-green-200'>
            <Image src={originalSrc} alt={altText} layout='fill' objectFit='cover' priority />
          </div>
        </div>
        <div className='w-full h-auto p-5 bg-gray-300'>
          <ProductForm product={product} />
        </div>
      </div>
      */}

      <section className='w-full mx-auto flex flex-col md:flex-row'>
        {/* Image Flex */}
        <div className='w-full md:w-1/2 xs:bg-gray-100 md:bg-transparent'>
          <div className='w-full mx-auto xs:w-5/6 xs:max-w-sm xs:my-[7.5vw] md:w-full md:my-0 md:max-w-none'>
            <Image src={originalSrc} alt={altText} layout='responsive' width={width} height={height} priority />
          </div>
        </div>
        {/* Description Flex */}
        <div className='w-full h-auto md:w-1/2'>
          <ProductForm product={product} />
        </div>
      </section>
    </>
  )
}
