const ErrorExample = () => {
  let count = 0;

  function handleClick() {
    count++;
    console.log(count);
  }
  return (
    <div>
      <h2>useState error example</h2>
      <h2>{count}</h2>
      <button className="btn" onClick={handleClick}>
        Increase
      </button>
    </div>
  );
};

export default ErrorExample;
