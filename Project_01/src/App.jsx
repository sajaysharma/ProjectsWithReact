import { useState } from "react";


function App() {

  let [counter, setCounter] = useState(10);

  
  const decNumber = () =>{
    counter -= 1;
    if(counter >= 0){
      setCounter(counter);
    }else{
      console.log("Con't access")
    }
  }

  const addNumber = () => {
    counter = counter + 1;
    if(counter <= 20){
      setCounter(counter);
    }else{
      console.log("con't add more than 20");
    }
  }
  return(
    <>
       <h1>Counter Project "Why we use Hooks!" </h1>
       <h1>Counter Value : {counter}</h1>
       <button onClick={addNumber} >Click me</button>
       <br /><br />
       <button onClick={decNumber}>Remove me</button>
    </>
  )
}

export default App
