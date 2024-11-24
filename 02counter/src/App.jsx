import React from 'react'
import { useState } from 'react'

const App = () => {

  let [counter, setCounter] = useState(5)


  //let counter = 15

  const addValue = () => {
   // console.log("clicked",counter);
    counter = counter + 1

    setCounter(counter)

  }
  const removeValue = () => {
    //console.log("clicked",counter);
    counter = counter - 1

    setCounter(counter)

  }

  return (
    <>
    <h1>Code with React !</h1>

    <h2>Counter Value: {counter} </h2>

    <button onClick={addValue}>Add Value</button>
    <br />
    <button onClick={removeValue}>Remove Value</button>
    </>

  )
}

export default App
