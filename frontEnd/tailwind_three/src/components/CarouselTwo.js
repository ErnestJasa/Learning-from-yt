import {FiChevronRight, FiChevronLeft} from "react-icons/fi";
import {useState} from "react";


const CarouselTwo = ()=>{
    const data = [
        {
            id: 1,
            image: 'https://picsum.photos/200',
            title: 'First Slide',
            random:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ducimus?',
        },
        {
            id: 2,
            image: 'https://picsum.photos/seed/picsum/200',
            title: 'Second Slide',
            random: 'Lorem ipsum dolor sit amet consectetur.',
        },
        {
            id: 3,
            image: 'https://picsum.photos/200?grayscale',
            title: 'Third Slide ',
            random:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum commodi deleniti quod illo?',
        },
    ];
    const [activeSlide, setActiveSlide] = useState(1)
    const prevSlideHandler = (id) =>{
        if(id === 1){
            setActiveSlide(data.length)
        }else if (id > 1){
            setActiveSlide(activeSlide - 1)
        }else{
            setActiveSlide(data.length - 1)
        }
    }
    const nextSlideHandler = (id) =>{
        if(id === data.length){
            setActiveSlide(1)
        }else if (id < data.length){
            setActiveSlide(activeSlide + 1)
        }else{
            setActiveSlide(data.length - 1)
        }
    }

    return(
        <div className='flex justify-center '>
            <div className='m-6 sm:w-[800px] w-[300px] bg-black/40'>
                {data.map((item)=>{
                    const{id, title, random} = item
                    return(
                        <div key={id}  className={activeSlide === id ? 'flex justify-between' : 'hidden'}>
                            <div onClick={()=> prevSlideHandler(id)} className='flex cursor-pointer group'>
                                <FiChevronLeft className='text-6xl  self-center group-hover:bg-black/10 group-hover:rounded-full '/>
                            </div>
                            <div className='flex flex-col flex-wrap text-center max-h-[200px] w-[500px] justify-center items-center'>
                                <h2 className='text-2xl font-bold '>{id}</h2>
                                <h3>{title}</h3>
                                <p>{random}</p>
                            </div>
                            <div onClick={()=> nextSlideHandler(id)} className=' flex cursor-pointer group'>
                                <FiChevronRight className='text-6xl  self-center group-hover:bg-black/10 group-hover:rounded-full '/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CarouselTwo