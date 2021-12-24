
import './App.css';
import {useState} from 'react';

function App() {
  const [count,setCount] =useState(0)

  function changecount(val) {
    setCount(count+val);

  }
  function multiply(val) {
    setCount(count*val);
  }

  // if(count>10) {
  //   return <div><h1>lol max num reached</h1></div>
  // }


  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <button onClick={() => changecount(1)}>Increment value</button>
      <button onClick={() => changecount(-1)}>Decrement value</button>
      <button onClick={() => multiply(2)}>Double</button>
      {/* <h1>Counter is {count%2===0 ? "Even":"Odd"}</h1> */}
    </div>
  );
}

export default App;
