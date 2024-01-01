import Headphones from "../assets/headphones.jpg";
const Card = () => {
  return (
    <div className="border p-4 rounded shadow-2xl w-[80%] max-w-[500px]">
      <div className="relative h-60 mb-4">
        <img
          className="absolute w-full h-full object-cover rounded"
          src={Headphones}
          alt="/"
        />
      </div>
      <div>
        <p className="font-semibold">Headphones</p>
        <p className="text-sm pb-2">Price: $298</p>
        <p className="font-thin">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quam
          corrupti quibusdam at maxime nostrum incidunt culpa quidem modi amet.
        </p>
      </div>
    </div>
  );
};
export default Card;
