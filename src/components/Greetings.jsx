import '../App.css'

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

  function Greet() {
    return <h1 className='heading2' style={custGreet}>{greeting}</h1>;
  }

export default Greet;