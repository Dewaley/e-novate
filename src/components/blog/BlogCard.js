import { FiUser } from "react-icons/fi";
import {
  AiOutlineCalendar,
  AiOutlineMessage,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { months } from "../../config/monthsApi";
import PlaceholderLoading from "react-placeholder-loading";

const BlogCard = ({ image, title, preamble, date, id, author }) => {
  const newDate = new Date(date);
  return (
    <div className="flex flex-col shadow-md rounded-md overflow-hidden w-full">
      <img src={image} alt="" className="w-full" />
      <div className="flex flex-col px-6 pt-4 gap-y-2">
        <div className="flex flex-wrap gap-y-2 gap-x-2 md:gap-x-4 text-secondary">
          <span className="flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base">
            <AiOutlineCalendar className="sm:text-lg text-base" />
            {months[newDate.getMonth()] +
              " " +
              newDate.getDate() +
              " " +
              newDate.getFullYear() || (
              <PlaceholderLoading shape="rect" width={100} height={10} />
            )}
          </span>
          <span className="flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base">
            <FiUser className="text-xl" />
            {author || (
              <PlaceholderLoading shape="rect" width={100} height={10} />
            )}
          </span>
          <span className="flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base">
            <AiOutlineMessage className="sm:text-lg text-base" />
            Comments
          </span>
        </div>
        <div>
          <h3 className="text-xl w-fit py-2">
            <Link to={`/blog/article/${id}`}>
              {title.length > 40
                ? title.slice(0, 40) + "..."
                : title || (
                    <PlaceholderLoading shape="rect" width={100} height={10} />
                  )}
            </Link>
          </h3>
          <p className="font-light text-sm">
            {preamble.length > 400
              ? preamble.slice(0, 400) + "..."
              : preamble || (
                  <div className="flex flex-col gap-y-2">
                    <PlaceholderLoading shape="rect" width={250} height={10} />
                    <PlaceholderLoading shape="rect" width={250} height={10} />
                  </div>
                )}
          </p>
        </div>
        <Link
          className="flex items-center bg-transparent text-secondary font-light py-2 gap-x-2 rounded mb-2 w-fit"
          to={`/blog/article/${id}`}
        >
          <span>READ ON</span>
          <AiOutlineArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
