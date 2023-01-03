import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  increament,
  decreament,
  increamentByAmount,
  increamentAsync,
  reset,
} from './counter-slice';

import RemoveIcon from '../UI/icon/RemoveIcon';
import ResetIcon from '../UI/icon/ResetIcon';
import AddIcon from '../UI/icon/AddIcon';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counter.value);
  const [enteredAmount, setEnteredAmount] = useState(2);

  const increamentHandler = () => {
    dispatch(increament());
  };
  const decreamentHandler = () => {
    dispatch(decreament());
  };
  const resetCounter = () => {
    dispatch(reset());
    setEnteredAmount(2);
  };
  const increamentByAmountHandler = () => {
    dispatch(increamentByAmount(Number(enteredAmount) || 0));
  };
  const asyncIncreamentHandler = () => {
    dispatch(increamentAsync(Number(enteredAmount) || 0));
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  return (
    <div className={classes.counter}>
      <span className={classes.icon} onClick={resetCounter}>
        <ResetIcon />
      </span>
      <div className={classes.main}>
        <span onClick={decreamentHandler} className={classes.icon}>
          <RemoveIcon />
        </span>
        <span className={classes.value}>{value}</span>
        <span onClick={increamentHandler} className={classes.icon}>
          <AddIcon />
        </span>
      </div>
      <div className={classes['amount-input']}>
        <input
          type="text"
          value={enteredAmount}
          onChange={amountChangeHandler}
        />
        <button onClick={increamentByAmountHandler}>Add by amout</button>
        <button onClick={asyncIncreamentHandler}>Add async</button>
      </div>
    </div>
  );
};

export default Counter;
