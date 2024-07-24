import React, { useContext } from 'react'
import MyContext from './context/UserContext'
const Contact = () => {
  const data = useContext(MyContext)
  console.log(data);
  return (
    <div>
        <h1>Contact Component {data.name}</h1>
    </div>
  )
}

export default Contact