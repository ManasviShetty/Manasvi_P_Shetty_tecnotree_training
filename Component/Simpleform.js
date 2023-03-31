import React, { useState } from "react";


function Simpleform() {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("username:", username, "password:", password);
    // handle form submission here
  };

  return (

  <div>
    <h1>
      REGISTRATION FORM
    </h1>
  
    
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Login</button>
      <button type="button">Signup</button>
      <button  type="button">Exit</button>
    </form>
    </div>
  );
}


export default Simpleform;
