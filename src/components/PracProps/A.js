import React, { Component } from 'react'
import B from './B'

export class A extends Component {
    constructor(props) {
      super(props)
      this.state = {
         surName : ''
      }
      this.getChildVillege = this.getChildVillege.bind(this)
    }
    

    getMarriage = () => {
        this.setState({
            surName : 'Phawade'
        })
    }

    getChildVillege(vName) {
        console.log(vName)
    }

  render() {
    return (
      <div>

        <h1>Kishor {this.state.surName}</h1>

        {/* <B name = {this.state.surName}/> */}

        <B  villege = {this.getChildVillege}  />
        <button onClick={this.getMarriage}>getMarriage</button>
      </div>
    )
  }
}

export default A