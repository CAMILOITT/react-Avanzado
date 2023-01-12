import { useRef } from 'react';
import { useCounter } from '../../components/challenge1/hookCustom/useCounter';
import './Challenge1.css';
export default function Challenge1() {
  const {
    count,
    increment,
    decrement,
    reset,
    steps,
    incrementSteps,
    decrementSteps,
  } = useCounter();
  const resultCounter = useRef();
  const limitMax = 10;
  const limitMin = 10;
  return (
    <div className="containerCounter">
      <div className="containerCounter__limit">
        <p className="limit__counter limit__counter-max">
          limit max: <span>{limitMax}</span>
        </p>
        <p className="limit__counter limit__counter-min">
          limit min: <span>{limitMin}</span>
        </p>
      </div>
      <span className="containerCounter__result" ref={resultCounter}>
        count <br /> {count}
      </span>
      <button
        className="containerCounter__btn containerCounter__btn-increment"
        onClick={() => increment(resultCounter, limitMax)}
      >
        +
      </button>
      <button
        className="containerCounter__btn containerCounter__btn-decrement"
        onClick={() => decrement(resultCounter, limitMin)}
      >
        -
      </button>
      <button
        className="containerCounter__btn containerCounter__btn-reset"
        onClick={() => reset(resultCounter)}
      >
        reset
      </button>
      <div className="containerCounter__steps">
        <span className="steps__result">
          steps <br /> {steps}
        </span>
        <button className="steps__increment" onClick={incrementSteps}>
          +
        </button>
        <button className="steps__decrement" onClick={decrementSteps}>
          -
        </button>
      </div>
    </div>
  );
}
