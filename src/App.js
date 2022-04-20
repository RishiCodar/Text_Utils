import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
//import About from "./components/About";
import Alert from "./components/Alert";
import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };
  const toglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#4bc2e3";
      document.body.style.color="white";
      showalert("Dark Mode is Enabled", "Success ");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color="#080809";
      showalert("Light Mode is Enabled", "Success ");
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toglemode={toglemode} />
      <Alert alert={alert} />
      <div className="container">
          
           {/* <Route path="/" element={<Textform showalert={showalert} heading="Enter the Text to Analyze Below" mode={mode}/>} */}
          <Textform showalert={showalert} heading="Enter the Text to Analyze Below" mode={mode}/>
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;


