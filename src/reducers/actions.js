import { createAction } from 'redux-actions'
import api from '../api'
import * as constants from './constants'

export const loadProducts = () => (dispatch) => {
  dispatch(createAction(constants.LOAD_PRODUCTS_START)())
  api()
    .then((data) => {
      dispatch(createAction(constants.LOAD_PRODUCTS_SUCCESS)(data))
    })
    .catch((error) => {
      dispatch(createAction(constants.LOAD_PRODUCTS_FAIL)(error))
    })
}

export const updateItem = createAction(constants.UPDATE_ITEM)
