import React from "react";

const Contact = (props)=>{
    return(
        <>
        <h1>contact</h1>
       Name: {props.message}
       age: {props.age}
       <p>{props.isStudent?"true":"false"}</p>
        </>
    )
}
export default Contact;