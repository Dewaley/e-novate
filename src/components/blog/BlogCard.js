import { FiUser } from "react-icons/fi";
import {
  AiOutlineCalendar,
  AiOutlineMessage,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { useNavigate, Link } from "react-router-dom";
import { months } from "../../config/monthsApi";

const BlogCard = ({ image, title, preamble, date, id }) => {
  const navigate = useNavigate();
  const newDate = new Date(date);
  const shortenedTitle = title.slice(0, 40) + "...";
  return (
    <div className="flex flex-col shadow-md rounded-md md:h-[440px] lg:h-auto overflow-hidden">
      <img src={image} alt="" className="w-full" />
      <div className="flex flex-col px-6 pt-4 gap-y-2">
        <div className="flex flex-wrap gap-y-2 gap-x-2 md:gap-x-4 text-secondary">
          <span className="flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base">
            <AiOutlineCalendar className="sm:text-lg text-base" />
            {months[newDate.getMonth()] +
              " " +
              newDate.getDate() +
              " " +
              newDate.getFullYear()}
          </span>
          <span className="flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base">
            <FiUser className="text-xl" />
            John Doe
          </span>
          <div className="flex justify-between">
            <span className="flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base">
              <AiOutlineMessage className="sm:text-lg text-base" />
              Comments
            </span>
          </div>
        </div>
        <div>
          <h3 className="text-xl w-fit py-2">
            <Link to={`/blog/${id}`}>
              {title.length > 40 ? shortenedTitle : title}
            </Link>
          </h3>
          <p className="font-light text-sm">{preamble.slice(0, 250)}...</p>
        </div>
        <div className="py-2 mt-4 mb-2 w-fit">
          <Link
            className="flex items-center bg-transparent text-secondary font-light py-2 gap-x-2 rounded"
            to={`/blog/${id}`}
          >
            <span>READ ON</span>
            <AiOutlineArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
