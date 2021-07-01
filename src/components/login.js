import React from 'react';

// import "./App.css";
import { useEffect } from "react";

function Login() {
  
  useEffect(() => {
    fetch("http://localhost:3000/login?user=user1")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => {
        console.log("error", err);
      });
  }, []);
  return <div className="App">LOGIN</div>;
}

export default Login;
