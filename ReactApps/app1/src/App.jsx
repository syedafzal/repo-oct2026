import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import MyData from './component/MyData'
import Person from './component/Person'
import MyAppClass from './component/MyAppClass'

import Accounts from './component/Accounts'
import User from './component/User'
function App() {
  const [count, setCount] = useState(0)
const location = "Bangalore";
  return (
    <>
    <div>Hello World</div>
    <MyData></MyData>
    <Person pname="Syed" job="Software Engineer"> </Person>
    <MyAppClass></MyAppClass>
    <p>{location}</p>
    <Accounts name="Sam" acType="Savings" balance="10000"></Accounts>

    <User></User>
    </>
  )
}

export default App
