import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Greet from './components/Greetings'
import Photo from './components/Photo'
import Info from './components/Info'


let fname = "S";
let lname = "DEY";
let luck = 7;
const currentYear = new Date().getFullYear();
const customCss = {
  display: "flex",
  color: "red",
  backgroundColor: "black",
  border: "3px solid red",
};
customCss.borderRadius = "6px";
customCss.textAlign = "center";
customCss.justifyContent = "center";
// customCss.width = "90%";
// customCss.height = "30px";
// customCss.paddingLeft = "30px";
// customCss.marginLeft = "30px";

function App() {
  const [count, setCount] = useState(0)
  return (
    // <h1 style={customCss}>Hello Mr. Sdey</h1>    //inline css
    <div>
      <Greet />
      <Photo />
      <Info fname={fname} lname={lname} luck={luck} currentYear={currentYear} />

    </div>
  )
}

export default App
