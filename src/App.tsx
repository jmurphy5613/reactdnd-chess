import "./App.css";
import Board from "./components/Board";

function App() {
    return (
        <div className="App">
            <Board knightPosition={[1, 1]} />
        </div>
    );
}

export default App;
