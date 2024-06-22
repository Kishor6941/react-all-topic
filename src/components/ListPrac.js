import React, { Component } from 'react'

export class ListPrac extends Component {
    
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      fruits : [
        {id : 1, name : 'Apple'},
        {id : 2, name : 'Mango'},
        {id : 3, name : 'Banana'},
    ]
    }
  }

    changeLi = (fName) => {
     this.setState({
      fruits : this.state.fruits.map((ele) => {
        if(ele.name === fName) {
          return {
            ...ele,
            name : ele.name+' ' + 'NewChange'
          }
        } else {
          return {
            ...ele
          }
        }
      } )
     })
    }
  render() {
    return (
      <div>
          <ul>
        {
            this.state.fruits.map((fName) => (
                 <li key={fName.id}>{fName.name}
                 <button onClick={() => this.changeLi(fName.name)}>edit</button>
                 </li>
            ))
        }
        </ul>
        <div>{this.props.children}</div>
      </div>
    )
  }
}

export default ListPrac