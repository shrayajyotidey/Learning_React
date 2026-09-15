import Footer from "./Footer"
import Header from "./Header"
import Note from "./Notes"
import './style.css'

function Keeper() {
    return <div className="container">
        <Header />
        <Note />
        <Footer />
    </div>
}


export default Keeper