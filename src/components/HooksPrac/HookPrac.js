import React, { Component } from 'react'
import Abc from './Abc'
export class HookPrac extends Component {
  constructor(props) {
    super(props)
  // initial set constructor
    this.state = {
       count : 0,
       name : "Kishor"
    }
  }

  counter = () => {
    // this.setState({
    //   count : this.state.count + 1
    // })
console.log('called');
    this.setState((prevstate) => ({
      count : prevstate.count + 1
  }), () => {
console.log(this.state.count)
  })
  }
  render() {
    return (
      <>
          {/* <div> */}
          <Abc></Abc>
          {/* <h1>{this.state.name}</h1>
          <button onClick={this.counter}>Increment</button> */}
          {/* </div> */}

          
      </>
    )
  }
}

export default HookPrac