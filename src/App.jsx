import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

let fname = "S";
let lname = "DEY";
let luck = 7;
const currentYear = new Date().getFullYear();
const randomImgUrl = 'https://picsum.photos/200'; //lorem picsum
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
//     <div>
//       <footer>
// <p>Created By {fname} {lname}.</p>
// <p>&copy; {currentYear}.</p>
// </footer>
//     </div> 

<div>
<h1 className='heading'>The Pictures</h1>
<div className='container'>
<img className='photo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7zDMYnGheNT1l7pEW3R5N3Uf4--yCjRprCG9W5WQ58g&s=10' alt='Tiger Image' />
<img className='photo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIAC1kBFD8UgsOayMBHWl9pktJkSO1BuY7ZpdVGmLUMg&s=10' alt='Scenary Image' />
<img className='photo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDSwQeYsy-xxMqXYaRUCU1BCqvSA0Y3pg20bi9UtO-Kg&s=10' alt='Human Image' />
<img className='photo' src= {randomImgUrl} alt='Random Image' />
<img className='photo' src= {randomImgUrl + "?grayscale"} alt='Random Gray Image' />
</div>
</div>


  )
}

export default App
