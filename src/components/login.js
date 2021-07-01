import React from 'react';
import connect from 'react-redux/lib/connect/connect';
import {saveFurniture} from "./actions"
import { useEffect } from "react";

function giveData() {
  
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

export default connect(null, {saveFurniture})(giveData)