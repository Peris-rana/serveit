const Card = ({ name, price, image }) => {
  return (
    <div className="card bg-base-100 image-full rounded-md  shadow-md">
      <figure className="h-93">
        <img src={image} alt={image} className="w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-5xl absolute bottom-9">{name}</h2>
        <p>{price}</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default Card;
