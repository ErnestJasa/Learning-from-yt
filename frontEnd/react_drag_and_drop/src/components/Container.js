import React, { useState } from "react";
import { data } from "@/data/data";
const Container = () => {
  const [aTier, setATier] = useState([]);
  const [bTier, setBTier] = useState([]);
  const [cTier, setCTier] = useState([]);
  const [dTier, setDTier] = useState([]);

  const handleOnDropA = (e) => {
    const imgLink = e.dataTransfer.getData("imgLink");    
    const imgId = e.dataTransfer.getData("imgId");
    setATier([...aTier, imgLink]);
    removeItem(imgLink);
  };
  const handleOnDropB = (e) => {
    const imgLink = e.dataTransfer.getData("imgLink");      
    const imgId = e.dataTransfer.getData("imgId");
    setBTier([...bTier, imgLink]);

    removeItem(imgLink);
  };
  const handleOnDropC = (e) => {
    const imgLink = e.dataTransfer.getData("imgLink");    
    const imgId = e.dataTransfer.getData("imgId");
    setCTier([...cTier, imgLink]);

    removeItem(imgLink);
  };
  const handleOnDropD = (e) => {
    const imgLink = e.dataTransfer.getData("imgLink");
    const imgId = e.dataTransfer.getData("imgId");
    setDTier([...dTier, imgLink]);

    removeItem(imgLink);
  };

  const handleOnDrag = (e, imgLink, id) => {
    e.dataTransfer.setData("imgLink", imgLink);
    e.dataTransfer.setData("imgId", id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const getIndex = (imgLink) => {
    const index = data.findIndex((x) => {
      return x.img === imgLink;
    });
    return index;
  };

  const removeItem = (imgLink) => {
    const index = getIndex(imgLink);
    console.log(index);
    data.splice(index, 1);
  };

  return (
    <div className=" ">
      <div className=" h-[500px] ">
        <div
          onDrop={handleOnDropA}
          onDragOver={handleDragOver}
          className="flex mb-2 h-[25%]"
        >
          <div className="py-5 px-3 bg-green-700 border-blue-400 border">
            <h2 className=" text-lg">A Tier</h2>
          </div>
          <div className="flex">
            {aTier?.map((item, id) => (
              <div key={id}>
                <img className=" h-[100%]" src={item} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div
          onDrop={handleOnDropB}
          onDragOver={handleDragOver}
          className="flex mb-2 h-[25%]"
        >
          <div className="py-5 px-3 bg-yellow-500 border-blue-400 border">
            <h2 className=" text-lg">B Tier</h2>
          </div>
          <div className="flex">
            {bTier?.map((item, id) => (
              <div key={id}>
                <img className=" h-[100%]" src={item} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div
          onDrop={handleOnDropC}
          onDragOver={handleDragOver}
          className="flex mb-2 h-[25%]"
        >
          <div className="py-5 px-3 bg-orange-500 border-blue-400 border">
            <h2 className=" text-lg">C Tier</h2>
          </div>
          <div className="flex">
            {cTier?.map((item, id) => (
              <div key={id}>
                <img className=" h-[100%]" src={item} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div
          onDrop={handleOnDropD}
          onDragOver={handleDragOver}
          className=" flex mb-2 h-[25%]"
        >
          <div className="py-5 px-3 bg-red-700 border-blue-400 border">
            <h2 className=" text-lg">D Tier</h2>
          </div>
          <div className="flex">
            {dTier?.map((item, id) => (
              <div key={id}>
                <img className=" h-[100%] w-auto" src={item} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex mt-28">
        {data.map((item, id) => (
          <div
            draggable
            onDragStart={(e) => handleOnDrag(e, item.img, item.id)}
            key={id}
          >
            <img src={item.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container;
