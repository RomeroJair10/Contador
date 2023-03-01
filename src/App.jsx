import { useState } from "react";

function App() {
  const [count, setCount] = useState(0)

  return (
   <div align = "center" className="mt-3">
    <h3>Contador</h3>
    <hr />
    <h1 className="mb-3">{count}</h1>
    
<button 
     onClick={() => {
      setCount(count + 1);
    }} 
     type="button" 
     className="btn btn-primary m-1"
     >+1</button>
<button 
     onClick={() => {
      setCount(count - 1);
    }} 
     type="button" 
     className="btn btn-danger m-1"
     >-1</button>
<button 
     onClick={() => {
      setCount(0);
    }} 
     type="button" 
     className="btn btn-info m-1"
     > 0</button>

   </div>
  )
}

export default App
