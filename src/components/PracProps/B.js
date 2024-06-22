import React, { Component } from 'react'

export class B extends Component {
    constructor(props) {
      super(props)
      this.state = {
        villegeName : "Latur"
      }
      
    }
  render() {
    return (
      <div>
        {/* <h1>Vaibhavi {this.props.name}</h1> */}
        <button onClick={() => this.props.villege(this.state.villegeName)}>Click</button>
      </div>
    )
  }
}

export default B