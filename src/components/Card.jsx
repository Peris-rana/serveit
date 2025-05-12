const Card = ({ name, image }) => {
  return (
    <div className="card bg-base-100 image-full rounded-md  shadow-md cursor-pointer">
      <figure className="md:h-93 h-53">
        <img src={image} alt={image} className="w-full" />
      </figure>
      <div className="card-body p-3">
        <h2 className="card-title text-xl sm:text-2xl md:text-5xl absolute bottom-4">
          {name}
        </h2>
      </div>
    </div>
  );
};

export default Card;
