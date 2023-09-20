import { useState } from "react";
import "./App.css";
import { Text } from './Text'
function App() {

  const [showText, setShowText] = useState(false);

  return (
    <div className="App">
      <button onClick={ () => {
        setShowText(!showText)
      }}>
       {  showText ? 'Hide input box' : 'Show input box'}  
      </button>

      { showText && <Text/> }
    </div>
  );
}
export default App;
