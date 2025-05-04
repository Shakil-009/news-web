import { FaEye, FaStar } from "react-icons/fa";
import { BsBookmark, BsShare } from "react-icons/bs";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    image_url,
    rating,
    total_view,
    details,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md rounded-xl">
      {/* Header */}
      <div className="flex bg-base-200 items-center justify-between p-4 rounded-t-xl">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="text-sm font-semibold">{author.name}</h2>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xl text-gray-600">
          <BsBookmark className="cursor-pointer" />
          <BsShare className="cursor-pointer" />
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-3">{title}</h2>
        <figure className="mb-4">
          <img
            src={image_url}
            alt={title}
            className="w-full h-60 object-cover rounded-md"
          />
        </figure>
        <p className="text-sm text-gray-700">
          {details.length > 250 ? (
            <>
              {details.slice(0, 250)}...
              <span className="text-primary font-medium cursor-pointer hover:underline"> Read More</span>
            </>
          ) : (
            details
          )}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3 border-t text-sm text-gray-600 w-[95%] mx-auto border-base-200">
        <div className="flex items-center gap-2">
          <FaStar className="text-yellow-500" />
          <span>{rating.number}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
