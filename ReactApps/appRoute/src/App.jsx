import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Menu from './components/Menu'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Routes</h1>
<Menu></Menu>
    </>
  )
}

export default App
