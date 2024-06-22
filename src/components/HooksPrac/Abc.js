import React,{useState} from 'react'

function Abc() {
  const [counter, setCount] = useState({
    count : 0,
    name : "Kishor"
  })
  
  let changeCounter = () => {
    console.log('called');
      // setCount({
      //   count : counter.count + 1
      // })

      setCount((prevState) => ({
          count : prevState.count + 1
      }))
  }

  return (
    <div>
        <h1>counter is : {counter.count}</h1>
        <button onClick={changeCounter}>Increment</button>
    </div>
  )
}

export default Abc

// 16.8  react hooks con
// function component state 

// [initialState, setInitialState]   = useState({})