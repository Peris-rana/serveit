const Card = ({ index, name, price, image, onSelect, isSelected }) => {
  const handleClick = () => {
    onSelect(index, price, name, image);
  };
  return (
    <div
      className={`card image-full rounded-md cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-90
      
      ${isSelected ? "border-b-3 border-b-blue-600 scale-85 md:scale-90 ring-1 ring-blue-600 " : "brightness-200"}
      `}
      onClick={handleClick}
    >
      <figure className="aspect-[8/9] md:aspect-auto md:h-80">
        <img src={image} alt={image} className="w-full scale-130" />
      </figure>
      <div className="card-body p-3">
        <span className="text-lg font-bold md:text-3xl absolute md:bottom-11 bottom-8">
          Rs.{price}
        </span>
        <span className="card-title text-lg font-black md:text-3xl absolute bottom-2">
          {name}
        </span>
      </div>
    </div>
  );
};

export default Card;
