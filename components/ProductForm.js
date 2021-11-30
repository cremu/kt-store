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
    <div className='rounded-md bg-yellow-50 shadow-lg flex flex-col w-full'>
      <h2 className='text-2xl text-indigo-500'>{product.title}</h2>
      <p>{product.description}</p>
      <span className='pb-6'>{formatter.format(product.variants.edges[0].node.priceV2.amount)} kr.</span>
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
