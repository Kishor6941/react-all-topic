import React, { memo } from 'react'

const ChildC = (props) => {
    console.log("Child component");
  return (
    <div>
        <div>
            <h1>Counter two : {props?.counterTwo}</h1>
            {/* <button className='btn btn-primary' onClick={props?.changeCounterTwo}>setCounterTwo</button> */}
        </div>
    </div>
  )
}

export default memo(ChildC);