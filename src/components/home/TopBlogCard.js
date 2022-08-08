import {
  AiOutlineCalendar,
  AiOutlineMessage,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { months } from "../../config/monthsApi";

const TopBlogCard = ({ image, title, preamble, date, id }) => {
  const navigate = useNavigate();
  const dateArray = date.slice(0, 10).split("-", 3);
  const month = dateArray[1] - 1;
  const shortenedTitle = title.slice(0, 40) + "...";
  return (
    <div className="flex flex-col shadow-md rounded-md overflow-hidden">
      <img src={image} alt="" className="w-full" />
      <div className="flex flex-col px-6 justify-between pt-4">
        <div className="flex flex-col justify-between">
          <div className="md:h-[180px] overflow-hidden">
            <h3 className="text-xl">
              {title.length > 40 ? shortenedTitle : title}
            </h3>
            <p className="font-light text-sm mb-4">
              {preamble.slice(0, 200)}...
            </p>
          </div>
          <div className="flex justify-between">
            <span className="flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base">
              <AiOutlineMessage className="sm:text-lg text-base" />
              Comments
            </span>
            <span className="flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base">
              <AiOutlineCalendar className="sm:text-lg text-base" />
              {months[month] + " " + dateArray[2] + ", " + dateArray[0]}
            </span>
          </div>
        </div>
        <div className="border-t-primary border-t-[1px] py-2 mt-4 mb-2">
          <button
            className="flex items-center bg-secondary text-white font-light text-sm px-4 py-2 gap-x-2 rounded"
            onClick={() => navigate(`/blog/${id}`)}
          >
            <span>Read on</span>
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBlogCard;
