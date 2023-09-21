import React from 'react'
import Counter from '../counter/Counter'

function CounterSet() {
  return (
    <Counter defaultC="0" agregation="1" limitMax="100" limitMin="0"/>
  )
}

export default CounterSet