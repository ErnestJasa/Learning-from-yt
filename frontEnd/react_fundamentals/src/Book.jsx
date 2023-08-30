function Book(props) {
  const { image, title, author, displayValue, children, number, id } = props; // this is destructuring an object

  return (
    <article className="book">
      <img alt={title} src={image} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <span className="number">#{number + 1}</span>
      <div>
        <button onClick={() => displayValue(id)}>Log book</button>
        {/* Special prop provided by React */}
        {children}
      </div>
    </article>
  );
}

export default Book;
