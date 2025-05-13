const Card = ({ name, price, image, onSelect }) => {
  const handleClick = () => {
    onSelect(price, name);
  };
  return (
    <div
      className="card brightness-200 bg-base-100 image-full rounded-md  shadow-md cursor-pointer"
      onClick={handleClick}
    >
      <figure className="aspect-[2/3] md:aspect-auto md:h-93">
        <img src={image} alt={image} className="w-full" />
      </figure>
      <div className="card-body p-3">
        <h2 className="card-title text-xl font-black sm:text-2xl md:text-5xl absolute bottom-4">
          {name}
        </h2>
      </div>
    </div>
  );
};

export default Card;
