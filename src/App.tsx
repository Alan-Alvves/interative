import { Title } from "./components/title/Title";
import { useState } from "react";
import "./styles/global.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <div className="containerBox">
        <Title>contagem de cliques</Title>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>soma 1</button>
        <button onClick={() => setCount(0)}>zera botao </button>
      </div>
    </div>
  );
}

export default App;
