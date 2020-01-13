import React, {useState} from 'react'
import {Card} from '../components/Card'

import './Counter.css'

export const Counter = () => {
  let [count, setCount] = useState(0)

  function handleClick() {
    setCount(count+1)
  }

  return (
    <Card title="Counter">
      {count}
      <button onClick={handleClick}>+</button>
    </Card>
  )
}


