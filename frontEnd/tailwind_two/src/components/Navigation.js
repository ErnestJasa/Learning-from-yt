import {useState} from "react";

const Navigation = () =>{
    const [dropdownOne, setDropdownOne] = useState(false)
    const [dropdownTwo, setDropdownTwo] = useState(false)
    const [dropdownThree, setDropdownThree] = useState(false)
   // console.log(dropdownOne)
    return(
        <div  className='py-5 flex justify-end'>
            <div className='text-3xl w-[150px] mx-2' onMouseEnter={()=>setDropdownOne(!dropdownOne)} onMouseLeave={()=>setDropdownOne(!dropdownOne)}>
                <h1>Dropdown</h1>
                {dropdownOne ?
                    <ul>
                        <li className='p-2'>option 1</li>
                        <li className='p-2'>option 2</li>
                        <li className='p-2'>option 3</li>
                    </ul> : ''
                }
            </div>
            <div className='text-3xl w-[150px] mx-2' onMouseEnter={()=>setDropdownTwo(!dropdownTwo)} onMouseLeave={()=>setDropdownTwo(!dropdownTwo)}>
                <h1 >Dropdown</h1>
                {dropdownTwo ?
                    <ul>
                        <li className='p-2'>option 1</li>
                        <li className='p-2'>option 2</li>
                        <li className='p-2'>option 3</li>
                    </ul> : ''
                }
            </div>
            <div className='text-3xl w-[150px] mx-2 mr-14' onMouseEnter={()=>setDropdownThree(!dropdownThree)} onMouseLeave={()=>setDropdownThree(!dropdownThree)}>
                <h1 >Dropdown</h1>
                {dropdownThree ?
                    <ul>
                        <li className='p-2'>option 1</li>
                        <li className='p-2'>option 2</li>
                        <li className='p-2'>option 3</li>
                    </ul> : ''
                }
            </div>
        </div>
    )
}

export default Navigation