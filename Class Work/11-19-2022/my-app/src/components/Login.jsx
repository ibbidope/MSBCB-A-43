import React, { useRef } from "react";

export default function LoginForm(){
    const nameField = useRef();
    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log("Again Submitted!")
        console.log("nameField", nameField.current);
    }
    return(
        <div>
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" ref={nameField}/>
                <label htmlFor="password">Password</label>
                <input type="password" />
                <button>Submit</button>
            </form>
        </div>
    )
}