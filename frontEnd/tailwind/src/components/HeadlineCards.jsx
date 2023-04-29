

const HeadlineCards = () =>{
    return(
        <div className='bg-[#2e394d]'>
            <div className='max-w-[1840px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            {/*  Card */}
                <div className='rounded-xl relative'>
                    {/* Overlay */}
                    <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                        <p className='font-bold text-2xl px-2 pt-4 '>Sun's out, BOGO's Out</p>
                        <p className='px-2'>Through 8/26</p>
                        <button className='border-white bg-white text-black mx-2 absolute bottom-4 right-4'>Order Now</button>
                    </div>
                    <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                        src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/"/>
                </div>
                {/*  Card */}
                <div className='rounded-xl relative'>
                    {/* Overlay */}
                    <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                        <p className='font-bold text-2xl px-2 pt-4 '>New Restaurants</p>
                        <p className='px-2'>Added Daily</p>
                        <button className='border-white bg-white text-black mx-2 absolute bottom-4 right-4'>Order Now</button>
                    </div>
                    <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                         src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/"/>
                </div>
                {/*  Card */}
                <div className='rounded-xl relative'>
                    {/* Overlay */}
                    <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                        <p className='font-bold text-2xl px-2 pt-4 '>We Deliver Deserts</p>
                        <p className='px-2'>Tasty treats</p>
                        <button className='border-white bg-white text-black mx-2 absolute bottom-4 right-4'>Order Now</button>
                    </div>
                    <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                         src="https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/"/>
                </div>
            </div>
        </div>
    )
}

export default HeadlineCards