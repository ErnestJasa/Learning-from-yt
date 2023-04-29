import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";
import {useState} from "react";
import {RxDotFilled} from "react-icons/rx";


const Carousel = ()=>{
    const slides =[
        {
            url: 'https://images.unsplash.com/photo-1674255909399-9bcb2cab6489?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=696&q=80'
        },
        {
            url: 'https://images.unsplash.com/photo-1674284623748-e2d3f89241ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        },
        {
            url: 'https://images.unsplash.com/photo-1674230239291-ac27af1a35d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
            url: 'https://images.unsplash.com/photo-1674256229383-1f67507d7556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
            url: 'https://images.unsplash.com/photo-1674244429622-d93d9b84556e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80'
        },
    ];
    const [currentIndex, setCurrentIndex]= useState(0)
    const prevSlide = ()=>{
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }
    const nextSlide = ()=>{
        const isLastSlide = currentIndex === slides.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }
    const goToSlide = (slideIndex)=>{
        setCurrentIndex(slideIndex)
    }
    return(
        <div className='max-w-[700px] h-[500px] w-full m-auto py-16 px-4 relative group'>
            <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>
        {/* Left arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
        {/* Right arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex)=>(
                    <div key={slideIndex} onClick={()=>goToSlide(slideIndex)} className='text-2xl cursor-pointer '>
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Carousel