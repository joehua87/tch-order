// @flow

import { compose, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../reducers/actions'
import Home from './OrderForm'

export default compose(
  connect(
    state => ({ redux: state.app }),
    dispatch => bindActionCreators(actions, dispatch),
  ),
)(Home)
