import {data} from "../data/Data";
import {useState} from "react";

const Food = ()=>{
    const [foods, setFoods] = useState(data)

    // Filter Type
    const filterType = (category)=>{
        setFoods(
            data.filter((item)=>{
                return item.category === category
            })
        )
    }
    // Filter Price
    const filterPrice = (price) =>{
        setFoods(
            data.filter((item)=>{
                return item.price === price
            })
        )
    }

    return(
        <div className='bg-[#2e394d]'>
            <div className='max-w-[1840px] m-auto px-4 py-12'>
                <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>

            {/* Filter Row */}
                <div className='flex flex-col lg:flex-row justify-between'>
                {/* Filter type */}
                    <div>
                        <p className={'font-bold text-gray-700 text-gray-200'}>Filter Type</p>
                        <div className='flex justify-between flex-wrap'>
                            <button onClick={()=>setFoods(data)} className='m-1 border-orange-600 text-orange-600 bg-gray-800 hover:bg-orange-600 hover:text-white'>All</button>
                            <button onClick={()=>filterType('burger')} className='m-1 border-orange-600 bg-gray-800 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
                            <button onClick={()=>filterType('pizza')} className='m-1 border-orange-600 bg-gray-800 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                            <button onClick={()=>filterType('salad')} className='m-1 border-orange-600 bg-gray-800 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
                            <button onClick={()=>filterType('chicken')} className='m-1 border-orange-600 bg-gray-800 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
                        </div>
                    </div>
                {/* Filter Price*/}
                    <div >
                        <p className='font-bold text-gray-700 text-gray-200'>Filter Price</p>
                        <div className='flex justify-between  max-w-[390px] w-full'>
                            <button onClick={()=> filterPrice('$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
                            <button onClick={()=> filterPrice('$$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
                            <button onClick={()=> filterPrice('$$$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
                            <button onClick={()=> filterPrice('$$$$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
                        </div>
                    </div>
                </div>
                {/* Display foods */}
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                    {foods.map((item, index)=> (
                        <div key={index} className='border bg-gray-200 shadow-2xl rounded-lg hover:scale-105 duration-300'>
                            <img src={item.image} alt={item.name}
                                className='w-full h-[200px] object-cover rounded-t-lg'
                            />
                            <div className='flex justify-between px-2 py-4'>
                                <p className='font-bold'>{item.name}</p>
                                <p>
                                    <span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Food