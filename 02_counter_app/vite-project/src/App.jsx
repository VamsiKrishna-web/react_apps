import { useState } from 'react'

import './App.css'

function App() {

  let [count, setCount] = useState(10)

  function addCounter() {
    setCount(count + 1)
  }
  function removeCounter() {

    setCount(count - 1)
  }
  return (
    <>
      <div>
        <h2>Counter :{count} </h2>

        <button onClick={addCounter}> Add Counter</button>
        <br />
        <br />
        <button onClick={removeCounter}> Remove Counter</button>

        <h3> counter update : {count}</h3>
      </div>

    </>
  )
}

export default App
