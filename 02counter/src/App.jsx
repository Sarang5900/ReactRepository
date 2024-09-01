import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)
  
  //let counter = 5
  
  const addValue = () => {
    if(counter==20){
      setCounter(20)
    } else {
      //counter = counter+1
      setCounter(counter + 1) 
      setCounter(counter + 1)
      setCounter(counter + 1)
      setCounter(counter + 1)
      // setCounter((prevCounter) => prevCounter + 1)
      // setCounter((prevCounter) => prevCounter + 1)
      // setCounter((prevCounter) => prevCounter + 1)
      console.log('add clicked', counter);
    }
  }

  const removeValue = () => {
    if(counter==0){
      setCounter(0);
    }else{
      counter = counter-1;
      setCounter(counter)
      console.log('remove clicked', counter);
    }
  }

  return (
    <>
      <h1>Chai Aur React {counter}</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <button onClick={removeValue}>Decrease Value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
