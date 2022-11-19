import React, { useRef, useState } from "react";

// Uncontrolled
/*export default function LoginForm() {
  const nameField = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Again Submitted!");
    console.log("nameField", nameField.current);
  };
  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" ref={nameField} />
        <label htmlFor="password">Password</label>
        <input type="password" />
        <button>Submit</button>
      </form>
    </div>
  );
}*/

// Controlled
export default function LoginForm() {
    const [nameField, setNameField] = useState("");
    const handleSubmit = (event) => {};
    const handleChange = (event) => {
        console.log("event.target.value : ", event.target.name);
        if(event.target.name === "nameField"){
            //check name
        }
        else{}
        setNameField(event.target.value);
    };
    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" ref={nameField} />
          <label htmlFor="password">Password</label>
          <input type="password" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
  
