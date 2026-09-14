import Heading from './Heading';
import List from './List';
import Paragraph from './Paragraph';

function Info({ fname, lname, luck, currentYear }) {
    return <div>
        <div>
            <Heading />
            <List />
            {/* <h1>Helo {fname +" "+ lname}</h1> */}
            {/* <h1>Helo {fname} {lname}</h1> */}
            {/* <h1>Helo {`${fname} ${lname}`}</h1> */}
            <Paragraph luck={luck}></Paragraph>
        </div>
        <div>
            <footer>
                <p>Created By {fname} {lname}.</p>
                <p>&copy; {currentYear}.</p>
            </footer>
        </div>
    </div>;
}

export default Info;