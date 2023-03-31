import React, { useState } from "react";

function Shownhide() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  render() { 
    return (
        <div>
        
          <label>
            Password:
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
    
    
          <button onClick={toggleShowPassword}>
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      );
      }
    }
export default Shownhide;
