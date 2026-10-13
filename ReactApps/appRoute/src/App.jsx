import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import './App.css'
import Menu from './components/Menu'
import Login from './components/Login';
import LoginFailed from './components/LoginFailed';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Routes</h1>
      <BrowserRouter>

            <Routes>

                <Route path="/" element={<Login />} />

                <Route path="/menu/*" element={<Menu />} />
                <Route path="/login-failed" element={<LoginFailed />} />

            </Routes>

        </BrowserRouter>
    </>
  )
}

export default App
