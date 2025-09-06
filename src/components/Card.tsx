
interface CardProps {
  title: string;
  desc: string;
  image: string;
  className?: string;
}

const Card = ({ title, desc, image, className }: CardProps) => {
  return (
    <div
      className={`w-full bg-white shadow-md rounded-lg mb-6 hover:shadow-xl hover:cursor-pointer transition-shadow duration-300 ${className}`}
    >
      <div id="card-header">
        <img
          src={image}
          alt="Blog Post"
          className="w-full h-48 object-cover rounded-t-md mb-4"
        />
      </div>
      <div className="card-body p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
