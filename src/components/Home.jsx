import React from "react";
import Contact from "./Contact";
const Home = ()=>{
    return(
        <>
        <Contact message="Hello from Parent!" age = {30} isStudent ={true} />
        <h1>Home</h1>
        </>
    )
}
export default Home;