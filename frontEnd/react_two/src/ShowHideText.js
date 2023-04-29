import {useState} from "react";

const ShowHideText = ()=>{

    const [inputValue, setInputValue] = useState('')
    const [text, setText] = useState(true)
    const handleInputChange = (event)=>{
        setInputValue(event.target.value)
    }
    const hideText = ()=>{
        if (text == true){
            setText(false)
        }else {
            setText(true)
        }
    }
    return(
        <>
                <input  type="text" onChange={handleInputChange}/>
            <div>
                <button onClick={hideText}>Show/Hide</button>
            </div>
            {text  && <h4>{inputValue}</h4>}
        </>
    )

}

export default ShowHideText