import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import AccountsCRUD from './components/AccountsCRUD'
import AccountsCRUD1 from './components/AccountsCRUD1'
import AccountsCRUD2 from './components/AccountsCRUD2'
import AppCRUD from './components/AppCRUD'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <AccountsCRUD></AccountsCRUD> */}
     {/* <AccountsCRUD1></AccountsCRUD1> */}
     {/* <AccountsCRUD2></AccountsCRUD2> */}
     <AppCRUD></AppCRUD>
    </>
  )
}

export default App
