import './style.css'

let fname = "S";
let lname = "Dey";
const currentYear = new Date().getFullYear();

function Footer() {
    return <footer>
        <p>Created By {fname} {lname}.</p>
        <p>&copy; {currentYear}.</p>
    </footer>
}

export default Footer;