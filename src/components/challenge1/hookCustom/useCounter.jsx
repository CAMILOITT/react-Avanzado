import { useState } from 'react';

export function useCounter() {
  const [count, setCount] = useState(0);
  const [steps, setSteps] = useState(1);

  function increment(tag, limit) {
    const newCount = count + steps;
    if (newCount > limit - 1) {
      tag.current.style.color = 'red';
      return;
    }
    tag.current.style.color = 'greenyellow';
    setCount(newCount);
  }

  function decrement(tag, limit) {
    const newCount = count + steps;

    if (newCount < -limit + 1) {
      tag.current.style.color = 'red';
      return;
    }
    tag.current.style.color = 'greenyellow';
    setCount(newCount);
  }

  function reset(tag) {
    tag.current.style.color = 'greenyellow';
    setCount(0);
  }

  function incrementSteps() {
    setSteps(steps + 1);
  }
  function decrementSteps() {
    if (steps <= 1) return;
    setSteps(steps - 1);
  }

  return {
    count,
    increment,
    decrement,
    reset,
    steps,
    incrementSteps,
    decrementSteps,
  };
}
