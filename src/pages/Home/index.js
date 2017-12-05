// @flow

import { compose } from 'redux'
import { connect } from 'react-redux'
import Home from './Home'

export default compose(
  connect(state => ({ redux: state.app })),
)(Home)
