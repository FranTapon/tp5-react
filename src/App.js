import { useState } from "react";

function App() {

  function incrementarNumero() {
      const i= numero+1;
      setNumero(i)
  }
  function disminuirNumero(){
    const i= numero-1;
    setNumero(i)
  }
  const [numero, setNumero] = useState(0);

  return (
    <div>
      <p>Números: {numero}</p>
      <button onClick={disminuirNumero}>-</button>
      <button onClick={incrementarNumero}>+</button>
    </div>
  );
}

export default App;