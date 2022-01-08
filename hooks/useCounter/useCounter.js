import React from "react";

export const useCounter = (initialStates = 0) => {
  const [counter, setCounter] = React.useState(initialStates);

  const increment = () => {
    setCounter(counter + 1);
  };

  const reset = () => {
    setCounter(initialStates);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
