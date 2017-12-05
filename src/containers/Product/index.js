// @flow

import React from 'react'
import OrderBox from '../OrderBox'

function Product({
  product,
  className,
  // updateItem,
  // orders,
}: {
  product: TProduct,
  className?: string,
  // updateItem: Function,
  orders: any,
}) {
  const imageSrc = `https://api.tch.vn/images/products/${product.id}.jpg`
  return (
    <div className={className}>
      <div
        className="w-100 cover relative"
        style={{ backgroundImage: `url(${imageSrc}`, paddingBottom: '100%' }}
      >
        <div className="bg-black-40 absolute bottom-0 w-100 pa2 white">
          {product.name}
        </div>
      </div>
      <div className="flex justify-around">
        {product.sizes.map(size => (
          <div key={size.name} className="w3">
            <OrderBox
              product={product}
              size={size}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product
