// @flow

import React from 'react'
import cn from 'classnames'
import Product from '../Product'

function ProductGroup({
  group,
  active,
  onSelect,
}: {
  group: TProductGroup,
  active: boolean,
  onSelect: Function,
}) {
  const productKeys = Object.keys(group.products || {})
  return (
    <div className={cn('ba b--light-gray br2')}>
      <div
        className="pointer pa1 bg-light-gray"
        onClick={() => onSelect(group.id)}
      >
        {group.title}
      </div>
      {active && (
        <div className={cn('flex items-center')}>
          {productKeys.map((key) => {
            const product = group.products[key]
            return (
              <div key={key} className="w-100 w-25-ns pa2 flex-none">
                <Product product={product} />
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default ProductGroup
