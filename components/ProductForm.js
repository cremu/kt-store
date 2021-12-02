import { useState } from 'react'
import { formatter } from '../utils/helpers'
import ProductOptions from './ProductOptions'

export default function ProductForm({ product }) {
  console.log(product)
  const allVariantOptions = product.variants.edges?.map((variant) => {
    const allOptions = {}
    variant.node.selectedOptions.map((option) => {
      allOptions[option.name] = option.value
    })

    return {
      title: product.title,
      handle: product.handle,
      id: variant.node.id,
      variantTitle: variant.node.title,
      variantPrice: variant.node.priceV2.amount,
      variantCompareAtPrice: variant.node.variantCompareAtPriceV2,
      variantImage: variant.node.image?.originalSrc,
      variantQuantity: 1,
      options: allOptions
    }
  })

  const defaultValues = {}
  product.options.map((item) => {
    defaultValues[item.name] = item.values[0]
  })

  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0])
  const [selectedOptions, setSelectedOptions] = useState(defaultValues)

  function setOptions(name, value) {
    setSelectedOptions((prevState) => {
      return { ...prevState, [name]: value }
    })
  }
  console.log(selectedOptions)

  return (
    <div className='flex flex-col pt-4 md:pt-0 md:pl-4'>
      <h2 className='font-circularBook text-3xl text-black tracking-tight'>{product.title}</h2>
      <p className='mt-2 text-lg'>{product.description}</p>
      <p className='font-circularBook text-xl my-2'>
        {product.variants.edges[0].node.compareAtPriceV2?.amount ? (
          <span className='line-through text-gray-400 mr-2'>
            {formatter.format(product.variants.edges[0].node.compareAtPriceV2.amount)} kr.
          </span>
        ) : (
          ''
        )}
        {formatter.format(product.variants.edges[0].node.priceV2.amount)} kr.
      </p>
      {product.options.map(({ name, values }) => (
        <ProductOptions
          key={`key-${name}`}
          name={name}
          values={values}
          selectedOptions={selectedOptions}
          setOptions={setOptions}
        />
      ))}
      <button className='bg-black text-white rounded-md px-2 py-3 hover:bg-gray-600'>Add to Cart</button>
    </div>
  )
}
