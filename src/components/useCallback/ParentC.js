import React, { useCallback, useState } from "react";
import ChildC from "./ChildC";

const ParentC = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  //   const changeCounterTwo = () => {
  //     setCounterTwo(counterTwo + 1);
  //   }

  const changeCounterTwo = useCallback(() => {
    setCounterTwo((t) => t + 1);
  }, [counterTwo]);

  return (
    <div>
      <div>
        <h3>Counter one : {counterOne}</h3>
      </div>
      <div>
        <button
          className="btn btn-success"
          onClick={() => setCounterOne(counterOne + 1)}
        >
          setCounter1
        </button> {"  "}
        <button onClick={changeCounterTwo} className="btn btn-primary">
          change2
        </button>
      </div>
      <ChildC counterTwo={counterTwo} />
      {/* <ChildC counterTwo={counterTwo} changeCounterTwo={changeCounterTwo}/> */}
    </div>
  );
};

export default ParentC;
