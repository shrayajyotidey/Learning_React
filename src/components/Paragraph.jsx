function Paragraph({luck}) {
    return <ul>
        <li>Welcome To The Website </li>
        <li>Your Lucky Number is {luck} </li>
        <li>Your Random Number is {Math.floor(Math.random() * 10)} </li>
    </ul>;
}

export default Paragraph;