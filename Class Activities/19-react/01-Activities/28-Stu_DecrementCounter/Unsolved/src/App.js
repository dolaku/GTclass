import React from "react";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">
        Click Counter!
        </div>
      <div className="card-body">
        < Counter />
        < Counter />
        < Counter />
      </div>
    </div>
  )
}

export default App;
