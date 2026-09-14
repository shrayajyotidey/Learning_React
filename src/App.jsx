import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Heading from './components/Heading'
import List from './components/List'
import Paragraph from './components/Paragraph'


let fname = "S";
let lname = "DEY";
let luck = 7;
const currentYear = new Date().getFullYear();
const randomImgUrl = 'https://picsum.photos/200'; //lorem picsum
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

let date = new Date();
// let date = new Date(2026,9,14,0);   //added to test other scenarios 
let n = date.toLocaleString([], {
  hour: "2-digit",
  minute: "2-digit"
})
console.log(n)

const custGreet = {
};

let hour = date.getHours();
let greeting = "";

if (hour >= 0 && hour < 12) {
  greeting = "Good Morning!";
  custGreet.color = "red";
} else if (hour >= 12 && hour < 18) {
  greeting = "Good Afternoon!";
  custGreet.color = "green";
} else {
  greeting = "Good Evening!";
  custGreet.color = "blue";
}
console.log(greeting)

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Heading />
      <List />
      {/* <h1>Helo {fname +" "+ lname}</h1> */}
      <h1>Helo {fname} {lname}</h1>
      {/* <h1>Helo {`${fname} ${lname}`}</h1> */}
      <Paragraph luck={luck}></Paragraph>
    </div>
    //     <div>
    //       <footer>
    // <p>Created By {fname} {lname}.</p>
    // <p>&copy; {currentYear}.</p>
    // </footer>
    //     </div> 

    // <div>
    //   <h1 className='heading'>The Pictures</h1>
    //   <div className='container'>
    //     <img className='photo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7zDMYnGheNT1l7pEW3R5N3Uf4--yCjRprCG9W5WQ58g&s=10' alt='Tiger Image' />
    //     <img className='photo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIAC1kBFD8UgsOayMBHWl9pktJkSO1BuY7ZpdVGmLUMg&s=10' alt='Scenary Image' />
    //     <img className='photo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDSwQeYsy-xxMqXYaRUCU1BCqvSA0Y3pg20bi9UtO-Kg&s=10' alt='Human Image' />
    //     <img className='photo' src={randomImgUrl} alt='Random Image' />
    //     <img className='photo' src={randomImgUrl + "?grayscale"} alt='Random Gray Image' />
    //   </div>
    // </div>

    //inline css
    // <h1 style={customCss}>Hello Mr. Sdey</h1>

    //try the challange
    // <h1 className='heading2' style={custGreet}>{greeting}</h1>

  )
}

export default App
