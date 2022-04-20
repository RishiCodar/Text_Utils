import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    //console.log("handleUp was clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handlelwClick = () => {
    //console.log("handleUp was clicked");
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const clearOnClick = (event) => {
    let newtext = "";
    setText(newtext);
  };
  const handleOnChange = (event) => {
    //console.log("Successfully Changed");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container "
        style={{ color: props.mode === "dark" ? "light" : "dark" }}
      >
        <h1 className="my-4">{props.heading}</h1>
        <div className="mb-3 my-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button disbaled={text.length===0} className="btn btn-primary my-2 mx-3" onClick={handleUpClick}>
          Covert to UpperCase
        </button>
        <button disbaled={text.length===0} className="btn btn-primary my-2 mx-3" onClick={handlelwClick}>Covert to Lowercase</button>
        <button disbaled={text.length===0} className="btn btn-primary my-2 mx-3" onClick={clearOnClick}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "light" : "dark" }}
      >
        <h1>Your Summary</h1>
        <p>
          Your Text contains{" "}
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} char
        </p>
        <h1>Preview</h1>
        <p>{text.length>0?text:"Enter something above to Preview It !!"}</p>
      </div>
    </>
  );
}