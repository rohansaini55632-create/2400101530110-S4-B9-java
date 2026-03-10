import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Demo from './component/Demo'
import Demo2 from './component/Demo2'

function App() {
  

  return (
    <>
    <div>
      <h1>This is an example of component</h1>
      <Example></Example>
      <Demo></Demo>
      <Demo2></Demo2>
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
