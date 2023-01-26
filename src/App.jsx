import { useState } from 'react'
import './App.css'
import Loader from "./assets/loader.gif"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" style={{backgroundImage:"./assets/bg.png"}}>
      <div className='content'>
        <img src={Loader} />
        <h1>Cooking...</h1>
      </div>
    </div>
  )
}

export default App
