/* eslint-disable eqeqeq */

// @flow

import React from 'react'
import ProductGroup from '../../containers/ProductGroup'

class OrderForm extends React.Component<OrderFormProps, any> {
  state = {
    selectedGroup: null,
  }

  selectGroup = (selectedGroup: string) => {
    if (this.state.selectedGroup == selectedGroup) {
      console.log('equal')
      this.setState({ selectedGroup: null })
    } else this.setState({ selectedGroup })
    // console.log(this.state.selectedGroup, selectedGroup)
    // this.setState({ selectedGroup })
  }

  componentDidMount() {
    this.props.loadProducts()
  }

  render() {
    const { selectedGroup } = this.state
    const { data } = this.props.redux
    const keys = Object.keys(data)
    return (
      <div>
        {keys.map(key => (
          <div key={key} className="pa2">
            <ProductGroup
              active={selectedGroup == key}
              onSelect={this.selectGroup}
              group={data[key]}
            />
          </div>
        ))}
      </div>
    )
  }
}

export default OrderForm
