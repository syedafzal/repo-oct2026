import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Login from './Login';
export default function Menu(){
    return (
<>
{/* <BrowserRouter> */}
<nav>
    <Link to="/menu/">Home</Link>
    <Link to="/menu/about">About</Link>

    <Link to="/menu/contact">Contact</Link>

    <Routes>
        <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>

    </Routes>
</nav>
{/* </BrowserRouter> */}
</>

);

}