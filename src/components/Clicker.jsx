function Cliker() {
  function greet() {
    alert("Welcome to React!");
  }

  return (
    <div style={{ backgroundColor: "purple"}}>
      <button onClick={greet}>Click Me</button>
    </div>
  );
}

export default Cliker;
