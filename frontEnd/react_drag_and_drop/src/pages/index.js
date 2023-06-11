'use client'
import { Inter } from 'next/font/google'
import Container from '../components/Container.js'
import { useState } from 'react'
import { data } from '@/data/data.js'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [widgets, setWidgets] = useState([])

  const handleOnDrag = (e, imgLink) => {
    e.dataTransfer.setData("imgLink", imgLink);
  };

  const handleOnDrop = (e) =>{
    const widgetType = e.dataTransfer.getData("widgetType")
    console.log(widgetType)
    setWidgets([...widgets, widgetType])
  }

  const handleDragOver = (e)=>{
    e.preventDefault();
  }

  return (
    <div className="text-white bg-[#242424] w-screen h-screen ">
      <Container/>     
      <div className='flex'>
     
        <div
          className="p-3 m-2 mr-5 bg-slate-900 border cursor-pointer"
          draggable
          onDragStart={(e) => handleOnDrag(e, "Widget A")}
        >
          Item A
        </div>
        <div
          className="p-3 m-2 mr-5 bg-slate-900 border cursor-pointer"
          draggable
          onDragStart={(e) => handleOnDrag(e, "Widget B")}
        >
          Item B
        </div>
        <div
          className="p-3 m-2 mr-5 bg-slate-900 border cursor-pointer"
          draggable
          onDragStart={(e) => handleOnDrag(e, "Widget C")}
        >
          Item C
        </div>
      </div>      
    </div>
  );
}
