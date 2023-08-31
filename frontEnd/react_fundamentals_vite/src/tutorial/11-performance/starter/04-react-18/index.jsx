import { useState, useTransition, Suspense, lazy } from "react";
// lazy makes it so the browser only loads/downloads the component when it is needed
const SlowComponent = lazy(() => import("./SlowComponent"));
const LatestReact = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(false);

  // isPending is a boolean, that says if we're awaiting some response from a function
  // and startTransition makes so the slow function could be executed in background, and other functionality wouldn't be throttled
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setText(e.target.value);
    startTransition(() => {
      // slow down CPU
      const newItems = Array.from({ length: 5000 }, (_, index) => {
        return (
          <div key={index}>
            <img src="/vite.svg" alt="" />
          </div>
        );
      });
      setItems(newItems);
    });
  };
  return (
    <section>
      <form className="form">
        <input
          type="text"
          className="form-input"
          value={text}
          onChange={handleChange}
        />
      </form>
      <h4>Items Below</h4>
      {isPending ? ( //  isPending is from useTransition
        <h4>Loading...</h4>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            marginTop: "2rem",
          }}
        >
          {items}
        </div>
      )}
      <button className="btn" onClick={() => setShow(!show)}>
        Show slow component
      </button>
      {show && (
        // Suspense works in tandem with the lazy function, which delays loading in imports, till they're needed
        // Typically people wrap the entire return in Suspense component
        <Suspense fallback={<h4>Loading...</h4>}>
          <SlowComponent />
        </Suspense>
      )}
    </section>
  );
};
export default LatestReact;
