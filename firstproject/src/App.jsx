import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Demo from './component/Demo'
import Demo2 from './component/Demo2'
import Arrow from './component/Arrow'
import State from './component/State'
import Hook from './component/Hook'
import Toggle from './component/Assignment1'

function App() {
  
  
 function  callfun()
    {
        alert("Function call");
    }
  function  callfun1()
    {
        alert("You are click on apple button");
    }
  function  callfun2()
    {
        alert("You are click on banana button");
    }
  return (
    <>
    <div>
      {/*<h1>This is an example of component</h1>
      <h1>Welcome in new project</h1>*/}
      {/* <Example></Example> */}
      {/* <Demo></Demo> */}
      {/* <Demo2></Demo2> */}
      {/*<button onClick={callfun}>OK</button>
      <button onClick={callfun1}>Apple</button>
      <button onClick={callfun2}>Banana</button>*/}
      <State></State>
      <Hook></Hook>
      <Toggle></Toggle>
    </div>
    </>
  )
}
function Example(){
  <div>
    <h1>this is an example of react project</h1>
  </div>
}
export default App
