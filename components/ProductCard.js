import Link from 'next/link'
import Image from 'next/image'
import { formatter } from '../utils/helpers'

export default function ProductCard({ product }) {
  const { handle, title } = product.node
  const { originalSrc, altText, width, height } = product.node.images.edges[0].node
  const price = product.node.priceRange.minVariantPrice.amount

  return (
    <Link href={`/products/${handle}`}>
      <a className='group'>
        <div className='w-full p-5 py-12 text-left transform duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer relative'>
          <Image src={originalSrc} alt={altText} width={width} height={height} className='p-5' />
          <h2 className=''>{title}</h2>
          <p className=''>{formatter.format(price)} kr.</p>
        </div>
      </a>
    </Link>
  )
}
