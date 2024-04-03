import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Header/Footer/Footer";
import { BrowserRouter,  Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/Aboutus";
import Contact from "./components/Contact";
import Classes from "./components/Classes";
import Class from "./components/Class";

const Layout = ()=>{
    return(
        <BrowserRouter>
       <div>
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/About">About</Link>
            </li>
            <li>
            <Link to="/Contact">Contact</Link>
            </li>
        </ul>
        <Routes>
       <Route exact path="/" element={<Home />}></Route>
       <Route exact path="/about" element={<About />}>
   <Route exact path="/about/classes" element={<Classes />}>
     <Route exact path="/about/classes/:className" element={<Class />} />
     <Route exact path="/about/classes/:classId" element={<Class />} />
    </Route>
 </Route>
       
       <Route exact path="/contact" element={<Contact />}></Route>            
    </Routes>
       </div>
        </BrowserRouter>
    )
}
export default Layout;