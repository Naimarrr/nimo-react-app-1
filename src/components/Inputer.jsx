import { useState } from "react";

function Inputer() {

    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value); //reads user inputs
    };

  return (
    <div style={{backgroundColor:"pink",padding :"5x"}}>
      <h1>onChange Example</h1>

      <input
        type="text" onChange={handleChange}
      />

      <h2>Hello {text}</h2>
    </div>
  );
}

export default Inputer;
