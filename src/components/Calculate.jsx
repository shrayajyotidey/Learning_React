import {add, substract, multiply, divide} from './Module'

function Cal(){
    return <ul>
        <li>Add Result: {add(5,2)}</li>
        <li>Substraction Result: {substract(5,2)}</li>
        <li>Multiplication Result: {multiply(5,5)}</li>
        <li>Division Result: {divide(9,3)}</li>
    </ul>
}

export default Cal;