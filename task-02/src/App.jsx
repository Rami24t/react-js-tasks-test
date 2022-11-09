import React, {useState} from "react";
import "./style.css";

function App() {
  const[transformationPoints, setTransformationPoints] = useState(window.innerHeight/2);

  return <div className="App">

  <button onClick={()=> setTransformationPoints(prev=>prev>50?prev-100: 0)}>Move Up</button>
  <div className="box" style={{transform: 'translateY('+transformationPoints+'px)'}}></div>
  </div>;
}

export default App;
