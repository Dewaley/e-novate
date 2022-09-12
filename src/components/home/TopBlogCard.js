import {
  AiOutlineCalendar,
  AiOutlineMessage,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { months } from "../../config/monthsApi";

const TopBlogCard = ({ image, title, preamble, date, id }) => {
  const formattedDate = new Date(date);
  const shortenedTitle = title.slice(0, 40) + "...";
  return (
    <div className="flex flex-col shadow-md rounded-md overflow-hidden">
      <img src={image} alt="" className="w-full" />
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col justify-between mx-6 h-full">
          <div className="pt-4">
            <h3 className="text-xl w-fit h-[3.5rem] overflow-hidden">
              <Link to={`/blog/article/${id}`} className="w-fit no-underline">
                {title.length > 40 ? shortenedTitle : title}
              </Link>
            </h3>
            <div
              className="h-[9.75rem] !text-sm overflow-hidden"
              dangerouslySetInnerHTML={{
                __html: preamble,
              }}
            />
          </div>
          <div className="flex justify-between mt-1">
            <span className="flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base">
              <AiOutlineMessage className="sm:text-lg text-base" />
              Comments
            </span>
            <span className="flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base">
              <AiOutlineCalendar className="sm:text-lg text-base" />
              {months[formattedDate.getMonth()] +
                " " +
                formattedDate.getDate() +
                ", " +
                formattedDate.getFullYear()}
            </span>
          </div>
        </div>
        <div className="border-t-primary border-t-[1px] py-2 mt-1 mb-2 mx-6">
          <Link
            to={`/blog/article/${id}`}
            className="flex items-center bg-secondary text-white font-light text-sm px-4 py-2 gap-x-2 rounded w-fit no-underline"
          >
            <span>Read on</span>
            <AiOutlineArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBlogCard;
