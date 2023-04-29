import {useState} from "react";

const NumberBrr = ()=>{
    const [number, setNumber] = useState(2)
    const increaseNumber = ()=>{
        setNumber(number*number)
    }
    return(
        <>
            <h1>{number}</h1>
            <button onClick={increaseNumber}>number brrrr</button>
        </>
    )
}
export default NumberBrr