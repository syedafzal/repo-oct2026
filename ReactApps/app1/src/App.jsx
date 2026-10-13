import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import MyData from './component/MyData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>Hello World</div>
    <MyData></MyData>
    </>
  )
}

export default App
