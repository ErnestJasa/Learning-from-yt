
const Navbar = ()=>{

    return(
        <div
            className='h-60 w-screen flex justify-center items-center'>
            <div className='relative -top-14'>
                <button className="bg-sky-600 w-[180px] p-2 font-bold text-gray-100 peer focus:bg-sky-400 focus:text-gray-200 transition-all duration-200">
                    Dropdown
                </button>
                <div className=' bg-gray-800 w-[180px] absolute top-5 z-10
                		after:inline-block after:absolute
                		after:w-full after:h-full after:-z-10  after:rounded-lg
                		peer-hover:top-12 peer-hover:opacity-100 peer-hover:visible
                		transition-all duration-300 invisible  opacity-0'>
                    <ul className=' pt-2 px-3 flex flex-col gap-3 '>
                        <li className='cursor-pointer p-3 border-b-2 hover:opacity-80 text-white'>
                            Eat an apple a day
                        </li>
                        <li className='cursor-pointer border-b-2 p-3 hover:opacity-90 text-white'>
                            Eat an apple a day
                        </li>
                        <li className='cursor-pointer border-b-2 p-3 hover:opacity-90 text-white'>
                            Eat an apple a day
                        </li>
                        <li className='cursor-pointer p-3 border-b-2 hover:opacity-90 text-white'>
                            Eat an apple a day
                        </li>
                        <li className='cursor-pointer p-3 border-b-2 hover:opacity-90 text-white'>
                            Eat an apple a day
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar