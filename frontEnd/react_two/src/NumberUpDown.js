import {useState} from "react";

const NumberUpDown = ()=>{
    const [number, setNumber] = useState(0)

    const increaseNumber = ()=>{
        setNumber(number+1);
    }
    const decreaseNumber = ()=>{
        setNumber(number-1);
    }
    const setToZero = ()=>{
        setNumber(0)
    }

    return(
        <div>
            <button onClick={increaseNumber}>Increase</button>
            <button onClick={decreaseNumber}>Decrease</button>
            <button onClick={setToZero}>Set to 0</button>
            <h3>{number}</h3>
        </div>
    )
}

export default NumberUpDown