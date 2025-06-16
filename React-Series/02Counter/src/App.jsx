import { useState } from 'react';
import './App.css'

function App() {
  //useState is a hook that allows us to add state to functional components
  //it returns an array with two elements: the current state value and a function to update it
  //the initial state value is passed as an argument to useState
  //the state value can be of any type: string, number, boolean, object, array, etc.
  //the function to update the state value can be called with a new value or a function that takes the previous value and returns a new value
  let [counter, SetCounter] = useState(5);
  const addValue = () => {
    SetCounter(counter + 1);
  }
  const removeValue=()=>{
    if(counter>0){
      SetCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Day 5 Of React</h1>
      <h2>Counter value :{counter}</h2>
      <button onClick={addValue}>Add Value</button> <br />
      <button onClick={removeValue}>Remove Value</button>

    </>
  )
}

export default App

/*
i learned that useState is a hook that allows us to add state to functional components
and it returns an array with two elements: the current state value and a function to update it
the initial state value is passed as an argument to useState
the state value can be of any type: string, number, boolean, object, array, etc.
the function to update the state value can be called with a new value or a function that takes the previous value and returns a new value
and also how to propagate the state value to the UI
*/