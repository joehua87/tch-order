// @flow

import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import dotProps from 'dot-prop-immutable'
import numeral from 'numeral'
import * as actions from '../../reducers/actions'

function OrderBox({
  product,
  size,
  orders,
  updateItem,
}: {
  product: TProduct,
  size: any,
  orders: any,
  updateItem: Function,
}) {
  const path = [product.id, size.name].join('.')
  const quantity = dotProps.get(orders, path) || 0
  return (
    <div>
      <div className="flex items-center justify-between w-100">
        <span>{size.name}</span>
        <span>{numeral(size.price).format('0 a')}</span>
      </div>
      <div className="flex items-center justify-between w-100">
        <span
          className="pa1 pointer bg-light-gray"
          onClick={() => updateItem([product.id, size.name, quantity + 1])}
        >
          +
        </span>
        <span className="pa1">{numeral(quantity).format('0 a')}</span>
        <span
          className="pa1 pointer bg-light-gray"
          onClick={() => updateItem([product.id, size.name, quantity - 1])}
        >
          -
        </span>
      </div>
    </div>
  )
}

export default connect(
  state => ({ orders: state.app.orders }),
  dispatch => bindActionCreators(actions, dispatch),
)(OrderBox)
