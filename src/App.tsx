import { useState } from "react";
import "./App.css";
import Board from "./components/Board";

function App() {

    const [knightX, setKnightX] = useState(1)
    const [knightY, setKnightY] = useState(0)

    setTimeout(() => {
      // setKnightX(Math.floor(Math.random()*8))
      // setKnightY(Math.floor(Math.random()*8))
    }, 2000)

    return (
        <div className="App">
            <Board knightPosition={[knightX, knightY]} />
        </div>
    );
}

export default App;
