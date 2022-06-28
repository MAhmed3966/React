import logo from './logo.svg';
import './App.css';
import Button from "./button";

function functionAlert(){
     alert("Hii");
}

function App() {
  return (
    <div className="App">
      <Button text={"Click me to get alert"} handleClick={()=>functionAlert()} />

    </div>
  );
}

export default App;
