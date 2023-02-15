import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom";
import { QRCodeSVG } from "qrcode.react";
import { QRCodeCanvas } from "qrcode.react";
import { useState } from "react";
function App() {
  const [text, setText] = useState("");
  const [qr, setQR] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setQR(text);
    setText("");
  }
  return (
    <div className="App">
      <QRCodeSVG value={qr} />

      <form onSubmit={handleSubmit} className="input-here">
        <p>Enter your text here</p>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button>Generate</button>
      </form>
    </div>
  );
}

export default App;
