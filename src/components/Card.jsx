const Card = ({ name, price, image, onSelect }) => {
  const handleClick = () => {
    onSelect(price, name, image);
  };
  return (
    <div
      className="card brightness-200 bg-base-100 image-full rounded-md  shadow-md cursor-pointer"
      onClick={handleClick}
    >
      <figure className="aspect-[8/9] md:aspect-auto md:h-80">
        <img src={image} alt={image} className="w-full" />
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
