"use client";

import React from 'react'
import { useState } from 'react';
import CounterSet from '../components/counterSet/CounterSet';

function page() {

    const [counter, setCounter] = useState(0);
    let defaultCounter = 0;
    
    // Functions
    const add = () => {
        setCounter(counter + 1);
    }

    const remove = () => {
        setCounter(counter > 0 ? counter - 1 : defaultCounter);
        if (counter > 0) {
          setCounter(counter - 1);
        } else {
          setCounter(defaultCounter);
        }
    }

    const reset = () => {
      setCounter(defaultCounter);
    }

  return (
    <>
        <h1>Aula de State</h1>
        <button onClick={add}>+</button>
        <button onClick={remove}>-</button>
        <button onClick={reset}>Reset</button>
        <p>Contagem: {counter}</p>
        <CounterSet></CounterSet>
    </>
  )
}

export default page