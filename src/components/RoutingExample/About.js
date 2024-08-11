import React, { useMemo, useState } from "react";

const About = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  function inc() {
    setCounterOne(counterOne + 1);
  }

  function dec() {
    setCounterTwo(counterTwo + 1);
  }
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div className="m-auto">
      <h1>UseMemo</h1>
      <div>
        <h3>first counter : {counterOne}</h3>
        <span>{isEven ? "Even" : "Odd"}</span>
        <h3>second counter : {counterTwo}</h3>
      </div>
      <div>
        <button className="btn btn-primary" onClick={() => inc()}>
          Increment
        </button>{" "}
        <button className="btn btn-success" onClick={() => dec()}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default About;
