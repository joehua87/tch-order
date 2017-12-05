/* eslint-disable no-case-declarations */

import dotProps from 'dot-prop-immutable'
import * as constants from './constants'

const initialState = {
  step: 0,
  loading: false,
  data: {},
  contact: {
    name: '',
    phone: '',
    email: '',
  },
  time: {
    now: true,
    time: '',
  },
  location: {
    address: '',
    ward: '',
    district: '',
  },
  orders: {
  },
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.LOAD_PRODUCTS_START:
      return {
        ...state,
        loading: true,
      }
    case constants.LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
      }
    case constants.UPDATE_ITEM:
      const [product, size, quantity] = action.payload
      return dotProps.set(state, `orders.${product}.${size}`, quantity)
    default:
      return state
  }
}
