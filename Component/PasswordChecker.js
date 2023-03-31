import React, { useState } from "react";

function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [lengthValid, setLengthValid] = useState(false);
  const [hasUpperCase, setHasUpperCase] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);

  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;

    // Check if password is at least 8 characters long
    if (passwordValue.length >= 8) {
      setLengthValid(true);
    } else {
      setLengthValid(false);
    }

    // Check if password contains at least one uppercase letter
    if (/[A-Z]/.test(passwordValue)) {
      setHasUpperCase(true);
    } else {
      setHasUpperCase(false);
    }

    // Check if password contains at least one number
    if (/\d/.test(passwordValue)) {
      setHasNumber(true);
    } else {
      setHasNumber(false);
    }

    setPassword(passwordValue);
  };

  return (
    <div>
      <h1>Password Checker</h1>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      {lengthValid ? <p>✔️ At least 8 characters long</p> : <p>❌ At least 8 characters long</p>}
      {hasUpperCase ? <p>✔️ Contains at least one uppercase letter</p> : <p>❌ Contains at least one uppercase letter</p>}
      {hasNumber ? <p>✔️ Contains at least one number</p> : <p>❌ Contains at least one number</p>}
    </div>
  );
}

export default PasswordChecker;
