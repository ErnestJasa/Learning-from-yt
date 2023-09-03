import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";
import { useMeasure } from "@uidotdev/usehooks";

function App() {
  const [count, setCount] = useState(1);
  const [tuple, setTuple] = useState([null, count]); // previous and current
  const [ref, { width }] = useMeasure();
  const [current, setCurrent] = useState(0);

  function handleNext() {
    if (current === items.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  }
  function handlePrev() {
    if (current === 0) {
      setCurrent(items.length - 1);
    } else {
      setCurrent(current - 1);
    }
  }

  if (tuple[1] !== count) {
    setTuple([tuple[1], count]);
  }
  let prev = tuple[0];
  let direction = count > prev ? 1 : -1;
  // console.log(width);
  const colors = ["bg-red-400, bg-blue-400", "bg-green-400", "bg-yellow-400"];

  return (
    <div className="text-white bg-slate-800 min-h-screen">
      <div className=" flex justify-between">
        {/* <button onClick={() => setCount(count - 1)}>Prev</button> */}
        {/* <button onClick={() => setCount(count + 1)}>Next</button> */}
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
      <div className="mt-8 flex justify-center">
        <div
          ref={ref}
          className="h-24 w-1/2 bg-gray-700 flex items-center overflow-hidden justify-center relative"
        >
          <AnimatePresence custom={{ direction, width }}>
            {items.map((item, index) => {
              if (current === index) {
                return (
                  <motion.div
                    key={index}
                    variants={variants}
                    // these three strings are referencing the variants object we made
                    initial="enter"
                    animate="center"
                    exit="exit"
                    custom={{ direction, width }} // whatever gets passed in here, ends up in variants
                    // transition={{ duration: 1 }}
                    className={`absolute  h-20 w-20 bg-red-400 flex items-center justify-center ${
                      colors[Math.abs(count % 4)]
                    }`}
                  >
                    <h2>{item.title}</h2>
                  </motion.div>
                );
              }
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

const items = [
  {
    title: "juyr",
  },
  {
    title: "mukytyu",
  },
  {
    title: "nuytkn",
  },
  {
    title: "btyuk",
  },
  {
    title: "kbuyj",
  },
];

let variants = {
  enter: ({ direction, width }) => ({ x: direction * width }),
  center: { x: 0 },
  exit: ({ direction, width }) => ({ x: direction * -width }),
};
export default App;
