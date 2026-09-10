import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

let fname = "S";
let lname = "DEY";
let luck = 7;
const currentYear = new Date().getFullYear();
function App() {
  const [count, setCount] = useState(0)
  return (
    // <div>
    //   {/* <h1>My Favourite Foods</h1>
    //   <ul>
    //     <li>Luchi</li>
    //     <li>Kachuri</li>
    //     <li>Alur Dam</li>
    //   </ul> */}
    //     {/* <h1>Helo {fname +" "+ lname}</h1> */}
    //     <h1>Helo {fname} {lname}</h1>
    //     {/* <h1>Helo {`${fname} ${lname}`}</h1> */}
    // <p>Welcome To The Website </p>
    // <p>Your Lucky Number is {luck} </p>
    // <p>Your Random Number is {Math.floor(Math.random()*10)} </p>
    // </div>
    <div>
      <footer>
<p>Created By {fname} {lname}.</p>
<p>&copy; {currentYear}.</p>
</footer>
    </div>
  )
}

export default App
